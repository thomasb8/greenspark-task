import Widget from "./widget.entity";

export const WIDGETS_REPOSITORY = Symbol('WIDGETS_REPOSITORY');

export interface WidgetsRepository {
  list(): Promise<Widget[]>;
  findById(id: number): Promise<Widget | undefined>
  save(widget: Partial<Widget>): Promise<Widget>
}
