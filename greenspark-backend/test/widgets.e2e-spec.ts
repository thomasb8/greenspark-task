import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { DataSource, Repository } from "typeorm";
import { getDataSourceToken } from "@nestjs/typeorm";
import Widget from "../src/widgets/widget.entity";
import { fakeData } from "../cli/init-db";

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }))

    await app.init();

    const repository: Repository<Widget> = await app.get<DataSource>(getDataSourceToken('greenspark')).getRepository(Widget);
    await repository.insert(fakeData);
  });

  it('/list (GET)', async () => {
    const res = await request(app.getHttpServer())
      .get('/widgets');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(fakeData);
  });

  describe('update', () => {
    it('should fail on invalid dto', async () => {
      const res = await request(app.getHttpServer())
        .put('/widgets/1')
        .send({ id: 23, active: 'false' });
      expect(res.status).toEqual(400);
    })

    it('should update correct widget', async () => {
      const res = await request(app.getHttpServer())
        .put('/widgets/1')
        .send({ linked: true });
      expect(res.status).toEqual(200);
      expect(res.body).toMatchObject({ id: 1, active: true, linked: true })
    })

    it('should update multiple parameters at once', async () => {
      const res = await request(app.getHttpServer())
        .put('/widgets/2')
        .send({ linked: true, active: false, selectedColor: 'black' });
      expect(res.status).toEqual(200);
      expect(res.body).toMatchObject({ id: 2, linked: true, active: false, selectedColor: 'black' })
    })
  })
});
