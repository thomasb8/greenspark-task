import { InjectionKey } from "vue";
import Widget from "../types/Widget";

export default class ApiService {
  constructor(private readonly apiBaseUrl: string) {
    this.apiBaseUrl = apiBaseUrl;
  }

  async fetchWidgets() {
    const widgets = await (await fetch(`${this.apiBaseUrl}/product-widgets`)).json();
    return widgets as Widget[];
  }
}

export const API_SERVICE: InjectionKey<ApiService> = Symbol();
