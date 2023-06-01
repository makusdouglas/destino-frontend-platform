import { HttpClient } from "../../data/protocols/http-client";
import axios from "axios";

export class AxiosHttpClient<T = any> implements HttpClient {
  async request(
    params: HttpClient.Params
  ): Promise<HttpClient.HttpResponse<T>> {
    const axiosPromise = await axios.request({
      url: params.url,
      method: params.method,
      data: params.body,
    });

    const httpResponsePromise: HttpClient.HttpResponse<T> = {
      statusCode: axiosPromise.status,
      body: axiosPromise.data,
    };

    return httpResponsePromise;
  }
}
