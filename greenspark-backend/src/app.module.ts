import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { createOrmConfig } from "./ormconfig";
import { WidgetsModule } from './widgets/widgets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(createOrmConfig()),
    WidgetsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
