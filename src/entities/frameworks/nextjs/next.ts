import { inject, injectable } from "inversify";
import { IAuth, IFramework, IValidation, Side } from "../../../contract";
import { TYPES } from "../../../types";
import "reflect-metadata";

@injectable()
export default class Next implements IFramework {
  @inject(TYPES.IAuth) private _auth: IAuth;
  @inject(TYPES.IValidation) private _validation: IValidation;
  public async addValidation(cmdValidation: string, type: Side) {
    const validation = await this._validation.implValidation();
    return validation;
  }
  public async addAuth() {
    const auth = await this._auth.implAuth();
    return auth;
  }
}
