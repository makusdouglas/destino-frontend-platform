import { Storage } from "../../../data/protocols";
import { LocalStorage } from "../../../infra/storage";

export const makeLocalStorageAdapter = (): Storage => {
  return new LocalStorage();
};
