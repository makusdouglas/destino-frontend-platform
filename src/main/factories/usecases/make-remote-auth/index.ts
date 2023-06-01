import { RemoteAuth } from "../../../../data/usecases";
import { AuthUseCase } from "../../../../domain/use-cases";
import { makeHttpClientDecorator } from "../../decorators";
import { makeBaseUrl } from "../../http";

export const makeRemoteAuth = (): AuthUseCase => {
  return new RemoteAuth(makeBaseUrl("/auth"), makeHttpClientDecorator());
};
