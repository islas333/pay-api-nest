import { Test, TestingModule } from '@nestjs/testing';
import { ChivasService } from './chivas.service';

describe('ChivasService', () => {
  let service: ChivasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChivasService],
    }).compile();

    service = module.get<ChivasService>(ChivasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
