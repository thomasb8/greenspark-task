import { Test, TestingModule } from '@nestjs/testing';
import { WidgetsService } from './widgets.service';
import WidgetsTestRepository from "./widgets.test.repository";
import { WIDGETS_REPOSITORY } from "./widgets.repository";
import Widget from "./widget.entity";

describe('WidgetsService', () => {
  let service: WidgetsService;
  let repository: WidgetsTestRepository;
  const testWidgets = [{ id: 1, active: true }, { id: 2, active: false }] as Widget[];
  beforeEach(async () => {
    const repository = new WidgetsTestRepository(testWidgets);
    const module: TestingModule = await Test.createTestingModule({
      providers: [WidgetsService, { provide: WIDGETS_REPOSITORY, useValue: repository }],
    }).compile();

    service = module.get<WidgetsService>(WidgetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('#list', () => {
    it('should list widgets', async () => {
      expect(await service.list()).toEqual(testWidgets);
    });
  })

  describe('#update', () => {
    it('should update widget by id', async () => {
      const widget = await service.update({ id: 1, selectedColor: 'green' } as Widget);
      expect(widget).toMatchObject({ id: 1, selectedColor: 'green', active: true })
    });
  })
});
