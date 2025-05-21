import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  NotFoundException,
} from '@nestjs/common';
import { EntregadorService } from './entregador.service';
import { CreateEntregadorDto } from './dto/create-entregador.dto';
import { UpdateEntregadorDto } from './dto/update-entregador.dto';

@Controller('entregador')
export class EntregadorController {
  constructor(private readonly entregadorService: EntregadorService) {}

  @Post()
  create(@Body() createEntregadorDto: CreateEntregadorDto) {
    return this.entregadorService.create(createEntregadorDto);
  }

  @Get()
  findAll() {
    return this.entregadorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const entregador = await this.entregadorService.findOne(id);
    if (!entregador) throw new NotFoundException();
    return entregador;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEntregadorDto: UpdateEntregadorDto,
  ) {
    const entregador = await this.entregadorService.update(
      id,
      updateEntregadorDto,
    );
    if (!entregador) throw new NotFoundException();
    return entregador;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const entregador = await this.entregadorService.remove(id);
    if (!entregador) throw new NotFoundException();
  }
}
