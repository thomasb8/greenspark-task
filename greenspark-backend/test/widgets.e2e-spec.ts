import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { DataSource, Repository } from "typeorm";
import { getDataSourceToken } from "@nestjs/typeorm";
import Widget from "../src/widgets/widget.entity";
import { fakeData } from "../cli/data";

describe('WidgetController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }))

    const repository: Repository<Widget> = await app.get<DataSource>(getDataSourceToken('greenspark')).getRepository(Widget);
    await repository.clear();
    await repository.insert(fakeData);

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  })

  it('/list (GET)', async () => {
    const res = await request(app.getHttpServer())
      .get('/product-widgets');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(fakeData);
  });

  describe('update', () => {
    it('should fail on invalid dto', async () => {
      const res = await request(app.getHttpServer())
        .put('/product-widgets/1')
        .send({ id: 233, active: 'false' });
      expect(res.status).toEqual(400);
    })

    it('should ignore extra properties', async () => {
      const [first] = (await request(app.getHttpServer())
        .get('/product-widgets')).body
      const res = await request(app.getHttpServer())
        .put(`/product-widgets/${first.id}`)
        .send({ id: 233, active: !first.active, action: 'something' });
      expect(res.status).toEqual(200);
      expect(res.body).toMatchObject({ id: first.id, active: !first.active, action: first.action })
    })

    it('should update correct widget', async () => {
      const [first] = (await request(app.getHttpServer())
        .get('/product-widgets')).body
      const res = await request(app.getHttpServer())
        .put(`/product-widgets/${first.id}`)
        .send({ linked: !first.linked });
      expect(res.status).toEqual(200);
      expect(res.body).toMatchObject({ id: first.id, linked: !first.linked })
    })

    it('should update multiple parameters at once', async () => {
      const [first] = (await request(app.getHttpServer())
        .get('/product-widgets')).body
      const res = await request(app.getHttpServer())
        .put(`/product-widgets/${first.id}`)
        .send({ linked: !first.linked, active: !first.active, selectedColor: 'black' });
      expect(res.status).toEqual(200);
      expect(res.body).toMatchObject({ id: first.id, linked: !first.linked, active: !first.active, selectedColor: 'black' })
    })
  })
});
