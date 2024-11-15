import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChivasModule } from './chivas/chivas.module';

@Module({
  imports: [ChivasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
