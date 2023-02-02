import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NotFoundException, ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: (origin, cb) => {
        if (origin && !JSON.parse(process.env.CORS_ORIGINS || '[]').includes(origin)) {
          return cb(new NotFoundException());
        }
        cb(null, true);
      },
      credentials: true
    }
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000);
}
bootstrap();
