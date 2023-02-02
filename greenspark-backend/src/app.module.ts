import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { createOrmConfig } from "./ormconfig";
import { WidgetsModule } from './widgets/widgets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(createOrmConfig()),
    WidgetsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
