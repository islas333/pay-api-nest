import { Module } from '@nestjs/common';
import { ChivasController } from './chivas.controller';
import { ChivasService } from './chivas.service';

@Module({
  controllers: [ChivasController],
  providers: [ChivasService]
})
export class ChivasModule {}
