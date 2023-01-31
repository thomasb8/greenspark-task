import { InjectionKey } from "vue";

export default class ApiService {
  constructor(private readonly apiBaseUrl: string) {
    this.apiBaseUrl = apiBaseUrl;
  }

  async fetchWidgets() {
    const res = await fetch(`${this.apiBaseUrl}/product-widgets`);
    return await res.json();
  }
}

export const API_SERVICE: InjectionKey<ApiService> = Symbol();
