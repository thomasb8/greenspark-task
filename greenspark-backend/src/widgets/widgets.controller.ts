import { Controller, Get } from '@nestjs/common';
import { WidgetsService } from "./widgets.service";
import Widget from "./widget.entity";

@Controller('widgets')
export class WidgetsController {
  constructor(private widgetService: WidgetsService) {
  }

  @Get()
  async list(): Promise<Widget[]> {
    return this.widgetService.list();
  }
}
