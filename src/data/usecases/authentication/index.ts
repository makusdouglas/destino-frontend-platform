import { AuthUseCase } from "../../../domain/use-cases";
import { HttpClient } from "../../protocols/http-client";
import { UnexpectedError } from "../../validation";

export class RemoteAuth implements AuthUseCase {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpClient<RemoteAuth.Result>
  ) {}

  async execute(params: RemoteAuth.Params): Promise<RemoteAuth.Result> {
    const httpResponse = await this.httpPostClient.request({
      method: "post",
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpClient.HttpStatusCode.ok:
        return httpResponse.body;

      case HttpClient.HttpStatusCode.noContent:
        return {} as RemoteAuth.Result;
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteAuth {
  export type Params = AuthUseCase.Params;
  export type Result = AuthUseCase.Result;
}
