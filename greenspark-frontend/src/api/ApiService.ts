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

  async updateWidget(id: number, widget: Partial<Widget>) {
    const res = await (await fetch(`${this.apiBaseUrl}/product-widgets/${id}`,
      { method: 'put', body: JSON.stringify(widget), headers: { 'Content-Type': 'application/json '} })).json();
    return res as Widget;
  }
}

export const API_SERVICE: InjectionKey<ApiService> = Symbol();
