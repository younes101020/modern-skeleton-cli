import "reflect-metadata";
import { IAuth, IFramework, IValidation, Side } from "../contract";
import { injectable, inject, named } from "inversify";
import { TYPES } from "../types";

@injectable()
export default class FrameworkFactory {
  @inject(TYPES.IFramework) @named("nextjs") next: IFramework;
  createFramework(condition: string): IFramework | null {
    switch (condition) {
      case "nextjs":
        return this.next;
      // case "gatsby":
      //   return ;
      // case "vite":
      //   return ;
      default:
        return null;
    }
  }
}
