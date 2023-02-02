import { Inject, Injectable } from '@nestjs/common';
import Widget from "./widget.entity";
import { WIDGETS_REPOSITORY, WidgetsRepository } from "./widgets.repository";

@Injectable()
export class WidgetsService {
  constructor(
    @Inject(WIDGETS_REPOSITORY) private widgetRepository: WidgetsRepository,
  ) {}

  list(): Promise<Widget[]> {
    return this.widgetRepository.list();
  }

  async update(id: number, widget: Partial<Widget>): Promise<Widget | undefined> {
    const existing = await this.widgetRepository.findById(id);
    if (!existing) return;
    return await this.widgetRepository.save({ ...existing, ...widget });
  }
}
