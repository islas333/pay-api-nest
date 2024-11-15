import { Test, TestingModule } from '@nestjs/testing';
import { ChivasController } from './chivas.controller';

describe('ChivasController', () => {
  let controller: ChivasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChivasController],
    }).compile();

    controller = module.get<ChivasController>(ChivasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
