import { AuthUseCase } from "../../../domain/use-cases";
import { makeRemoteAuth } from "../../factories/usecases";

export const authAdapter = async (
  params: AuthUseCase.Params
): Promise<AuthUseCase.Result> => {
  return await makeRemoteAuth().execute(params);
};
