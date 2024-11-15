import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ChivasService } from './chivas.service';

@Controller('chivas')
export class ChivasController {
  constructor(private readonly chivasService: ChivasService) {}

  @Get()
  findAll() {
    return this.chivasService.findAll();
  }

  @Post()
  create(@Body() newChiva: { id: number; first_name: string; email: string }) {
    return this.chivasService.create(newChiva);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updatedChiva: { first_name?: string; email?: string },
  ) {
    return this.chivasService.update(id, updatedChiva);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.chivasService.delete(id);
  }
}
