import { reactive } from 'vue';
import Widget from "./types/Widget";

export const store = reactive<{
  widgets: Widget[],
  set: (widgets: Widget[]) => void,
  update: (id: number, widget: Widget) => void
}>({
  widgets: [],
  set(widgets: Widget[]) {
    this.widgets = widgets;
  },
  update(id: number, widget: Widget) {
    const widgetIndex = this.widgets.findIndex(it => it.id === id);
    this.widgets[widgetIndex] = widget;
  }
});
