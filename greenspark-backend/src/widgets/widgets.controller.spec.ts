import { Test, TestingModule } from '@nestjs/testing';
import { WidgetsController } from './widgets.controller';
import WidgetsTestRepository from "./widgets.test.repository";
import Widget from "./widget.entity";
import { WIDGETS_REPOSITORY } from "./widgets.repository";
import { WidgetsService } from "./widgets.service";

describe('WidgetsController', () => {
  let controller: WidgetsController;
  let repository: WidgetsTestRepository;
  const testWidgets = [{ id: 1, active: true }, { id: 2, active: false }] as Widget[];
  beforeEach(async () => {
    const repository = new WidgetsTestRepository(testWidgets);
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WidgetsController],
      providers: [{ provide: WIDGETS_REPOSITORY, useValue: repository }, WidgetsService]
    }).compile();

    controller = module.get<WidgetsController>(WidgetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('#list', () => {
    it('should list available widgets', async () => {
      const list = await controller.list();
      expect(list).toEqual(testWidgets);
    })
  })
});
