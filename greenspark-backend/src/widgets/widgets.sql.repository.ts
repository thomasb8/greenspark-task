import { WidgetsRepository } from "./widgets.repository";
import Widget from "./widget.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class WidgetsSqlRepository implements WidgetsRepository {
  constructor(@InjectRepository(Widget, 'greenspark') private widgetRepository: Repository<Widget>) {}

  list(): Promise<Widget[]> {
    return this.widgetRepository.find();
  }

  findById(id: number) {
    return this.widgetRepository.findOneBy({ id });
  }

  save(widget: Partial<Widget>) {
    return this.widgetRepository.save(widget);
  }
}
