export enum Side {
  Server = "SERVER",
  Client = "CLIENT",
}

export interface IFramework {
  // cmd: string;
  addValidation(cmdValidation: string, type: string): Promise<void>;
  addAuth(): Promise<string>;
}

export interface IAuth {
  implAuth(): Promise<string>;
}

export interface IValidation {
  implValidation(): Promise<void>;
}
