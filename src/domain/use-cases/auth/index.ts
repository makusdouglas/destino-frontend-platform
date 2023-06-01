import { AuthModel } from "../../models";

export interface AuthUseCase {
  execute: (params: AuthUseCase.Params) => Promise<AuthUseCase.Result>;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AuthUseCase {
  export type Params = {
    usernameOrEmail: string;
    password: string;
  };
  export type Result = AuthModel;
}
