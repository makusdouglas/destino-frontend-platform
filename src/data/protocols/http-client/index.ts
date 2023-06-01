// create a protocol to http client
export interface HttpClient<T = any> {
  request: (params: HttpClient.Params) => Promise<HttpClient.HttpResponse<T>>;
}

export declare namespace HttpClient {
  type HttpMethod = "post" | "get" | "put" | "delete";
  type Params = {
    url: string;
    method: HttpMethod;
    body?: any;
    headers?: any;
  };
  type HttpResponse<T = any> = {
    statusCode: HttpStatusCode;
    body: T;
  };

  export enum HttpStatusCode {
    ok = 200,
    noContent = 204,
    badRequest = 400,
    unauthorized = 401,
    notFound = 404,
    serverError = 500,
  }
}
