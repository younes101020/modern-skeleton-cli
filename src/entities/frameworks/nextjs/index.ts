import { inject, injectable, named } from "inversify";
import { IFramework, IInit, InitProvider } from "../contract";
import { TYPES } from "../../../types";
import "reflect-metadata";
import { IValidation, Side } from "./validations/contract";
import { IAuth } from "./auths/contract";
import { promises as fs } from "fs";
import { exec } from "child_process";
import util from "util";
import checkFileExists from "../../../utils/checkFileExist";

@injectable()
class Next implements IFramework {
  @inject(TYPES.IValidation) @named("zod") validation: IValidation;
  @inject(TYPES.IAuth) @named("next-auth") auth: IAuth;
  @inject(TYPES.project) project: string;
  @inject(TYPES.InitProvider) provider: InitProvider;
  constructor() {
    this.init();
  }
  public async addValidation(type: Side) {
    const validation = await this.validation.implValidation(type);
    return validation;
  }
  public async addAuth(lib: string) {
    switch (lib) {
      case "next-auth":
        const auth = await this.auth.implAuth(lib, this.project);
        return auth;
      default:
        return "No auth added";
    }
  }
  private async init() {}
}

@injectable()
class Init implements IInit {
  project: string;
  async init() {
    const execProm = util.promisify(exec);
    try {
      const fileExist = await checkFileExists(`./${this.project}`);
      if (!fileExist) await fs.mkdir(`./${this.project}`);
      await execProm("yarn add next@latest react@latest react-dom@latest", {
        cwd: `./${this.project}`,
      });
      const data = await fs.readFile(`./${this.project}/package.json`, "utf8");
      const packageJson = JSON.parse(data);
      Object.assign(packageJson.scripts, {
        dev: "next dev",
        build: "next build",
        start: "next start",
        lint: "next lint",
      });
      const resolved = await fs.writeFile(
        `./${this.project}/package.json`,
        JSON.stringify(packageJson, null, 2)
      );
      return resolved;
    } catch (error) {}
  }
}

export { Next, Init };
