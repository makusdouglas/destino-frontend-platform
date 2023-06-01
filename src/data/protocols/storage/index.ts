export interface Storage {
  set: (key: string, value: any) => void;
  get: <T = any>(key: string) => T;
  remove: (key: string) => void;
  clear: () => void;
}
