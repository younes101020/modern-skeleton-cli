import { injectable } from "inversify";
import { IAuth } from "./contract";
import util from "util";
import { exec } from "child_process";

@injectable()
export default class NextAuth implements IAuth {
  // provider: string;
  // constructor(provider: string) {
  //   this.provider = provider;
  // }
  async implAuth(lib: string, project: string): Promise<string> {
    const execProm = util.promisify(exec);
    await execProm(`yarn add ${lib}`, {
      cwd: `../${project}`,
    });
    return new Promise((resolve) => {
      setTimeout(() => resolve("à"), 1000);
    });
  }
}
