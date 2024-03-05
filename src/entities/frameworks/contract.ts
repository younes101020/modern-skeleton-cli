export interface IFramework {
  project: string;
  addValidation(cmdValidation: string, type: string): Promise<void>;
  addAuth(lib: string): Promise<string>;
}

export interface IInit {
  project: string;
  init(): Promise<any>;
}

export type InitProvider = () => Promise<boolean>;