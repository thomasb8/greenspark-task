import { Inject, Injectable } from '@nestjs/common';
import Widget from "./widget.entity";
import { WIDGETS_REPOSITORY, WidgetsRepository } from "./widgets.repository";

@Injectable()
export class WidgetsService {
  constructor(
    @Inject(WIDGETS_REPOSITORY) private widgetRepository: WidgetsRepository,
  ) {}

  list() {
    return this.widgetRepository.list();
  }

  update(widget: Widget) {
    return this.widgetRepository.update(widget);
  }
}
