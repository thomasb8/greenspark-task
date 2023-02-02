import { Test, TestingModule } from '@nestjs/testing';
import { WidgetsController } from './widgets.controller';
import WidgetsTestRepository from "./widgets.test.repository";
import Widget from "./widget.entity";
import { WIDGETS_REPOSITORY } from "./widgets.repository";
import { WidgetsService } from "./widgets.service";

describe('WidgetsController', () => {
  let controller: WidgetsController;
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

  describe('#update', () => {
    it('should update widget with given id', async () => {
      const dto = { active: true };
      const res = await controller.update(2, dto);
      expect(res).toEqual({ id: 2, active: true });
    })

    it('should only updates single widget', async () => {
      const dto = { active: true };
      await controller.update(2, dto);
      const list = await controller.list();
      expect(list).toEqual([{ id: 1, active: true }, { id: 2, active: true }]);
    })

    it('should fail if widget does not exist', async () => {
      const dto = { active: false };
      const res = await controller.update(3, dto);
      expect(res).toEqual(undefined);
    })
  })
});
