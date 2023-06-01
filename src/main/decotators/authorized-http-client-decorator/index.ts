import { Storage } from "../../../data/protocols";
import { HttpClient } from "../../../data/protocols/http-client";

export class AuthorizeHttpClientDecorator implements HttpClient {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly storage: Storage
  ) {}
  async request(params: HttpClient.Params): Promise<HttpClient.HttpResponse> {
    const account = await this.storage.get("account");
    if (account) {
      params.headers = {
        ...params.headers,
        Authorization: `Bearer ${account.accessToken}`,
      };
    }

    const httpResponsePromise = await this.httpClient.request(params);

    return httpResponsePromise;
  }
}
