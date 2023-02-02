import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { WidgetsService } from "./widgets.service";
import Widget from "./widget.entity";
import PartialUpdateWidgetDto from "./dto/UpdateWidgetDto";

@Controller('product-widgets')
export class WidgetsController {
  constructor(private widgetService: WidgetsService) {
  }

  @Get()
  async list(): Promise<Widget[]> {
    return this.widgetService.list();
  }

  @Put('/:widgetId')
  async update(@Param('widgetId') id: number, @Body() widget: PartialUpdateWidgetDto): Promise<Widget | undefined> {
    return this.widgetService.update(id, widget);
  }
}
