import { Module } from '@nestjs/common';
import { WidgetsController } from './widgets.controller';
import { WidgetsService } from './widgets.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import Widget from "./widget.entity";
import { WIDGETS_REPOSITORY } from "./widgets.repository";
import WidgetsSqlRepository from "./widgets.sql.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Widget], 'greenspark')],
  controllers: [WidgetsController],
  providers: [
    { provide: WIDGETS_REPOSITORY, useClass: WidgetsSqlRepository },
    WidgetsService,
  ],
  exports: [TypeOrmModule]
})
export class WidgetsModule {}
