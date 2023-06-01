import { HttpClient } from "../../../data/protocols/http-client";

export class HttpClientDecorator implements HttpClient {
  constructor(private readonly httpClient: HttpClient) {}

  async request(params: HttpClient.Params): Promise<HttpClient.HttpResponse> {
    const httpResponsePromise = await this.httpClient.request(params);

    return httpResponsePromise;
  }
}
