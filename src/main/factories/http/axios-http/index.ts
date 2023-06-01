import { HttpClient } from "../../../../data/protocols/http-client";
import { AxiosHttpClient } from "../../../../infra/http";

export const makeAxiosHttpClient = (): HttpClient => {
  return new AxiosHttpClient();
};
