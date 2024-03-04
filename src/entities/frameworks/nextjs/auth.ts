import { injectable } from "inversify";
import { IAuth } from "../../../contract";

@injectable()
export default class Auth implements IAuth {
  // provider: string;
  // constructor(provider: string) {
  //   this.provider = provider;
  // }
  async implAuth(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve("à"), 1000);
    });
  }
}
