import { HttpClient } from "../../../../data/protocols/http-client";
import { HttpClientDecorator } from "../../../decotators";
import { makeAxiosHttpClient } from "../../http";

export const makeHttpClientDecorator = (): HttpClient => {
  return new HttpClientDecorator(makeAxiosHttpClient());
};
