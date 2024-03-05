export interface IAuth {
  implAuth(lib: string, project: string): Promise<string>;
}
