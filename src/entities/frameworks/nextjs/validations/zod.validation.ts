import { injectable } from "inversify";
import { IValidation } from "./contract";

@injectable()
export default class ZodValidation implements IValidation {
  public async implValidation() {
    new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
}
