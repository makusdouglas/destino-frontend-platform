import { HttpClient } from "../../../../data/protocols/http-client";
import { makeLocalStorageAdapter } from "../../../adapters/local-storage-adapter";
import { AuthorizeHttpClientDecorator } from "../../../decotators";
import { makeAxiosHttpClient } from "../../http";

export const makeAuthorizeHttpClientDecorator = (): HttpClient => {
  return new AuthorizeHttpClientDecorator(
    makeAxiosHttpClient(),
    makeLocalStorageAdapter()
  );
};
