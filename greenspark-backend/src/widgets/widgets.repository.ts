import Widget from "./widget.entity";

export const WIDGETS_REPOSITORY = Symbol('WIDGETS_REPOSITORY');

export interface WidgetsRepository {
  list(): Promise<Widget[]>;

  update(widget: Widget): Promise<Widget>
}
