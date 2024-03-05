export enum Side {
  Server = "SERVER",
  Client = "CLIENT",
}

export interface IValidation {
  implValidation(side: Side): Promise<void>;
}
