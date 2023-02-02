import { WidgetsRepository } from "./widgets.repository";
import Widget from "./widget.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class WidgetsTestRepository implements WidgetsRepository {
  constructor(private widgets: Widget[]) {}
  list(): Promise<Widget[]> {
    return Promise.resolve(this.widgets);
  }

  findById(id: number) {
    return Promise.resolve(this.widgets.find(it => it.id === id));
  }

  save(widget: Partial<Widget>) {
    const i = this.widgets.findIndex(it => it.id === widget.id);
    this.widgets[i] = { ...this.widgets[i], ...widget };
    return Promise.resolve(this.widgets[i]);
  }

}
