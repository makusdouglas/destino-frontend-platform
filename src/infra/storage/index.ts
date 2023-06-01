import { Storage } from "../../data/protocols";

export class LocalStorage implements Storage {
  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    return localStorage.clear();
  }

  set(key: string, value: any): void {
    const valusToSave = this.stringfyValue(value);
    localStorage.setItem(key, valusToSave);
  }

  get(key: string): any {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  private stringfyValue(value: any): string {
    return typeof value === "string" ? value : JSON.stringify(value);
  }
}
