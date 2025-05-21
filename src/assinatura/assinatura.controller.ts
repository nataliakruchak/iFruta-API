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
import { AssinaturaService } from './assinatura.service';
import { CreateAssinaturaDto } from './dto/create-assinatura.dto';
import { UpdateAssinaturaDto } from './dto/update-assinatura.dto';

@Controller('assinatura')
export class AssinaturaController {
  constructor(private readonly assinaturaService: AssinaturaService) {}

  @Post()
  create(@Body() createAssinaturaDto: CreateAssinaturaDto) {
    return this.assinaturaService.create(createAssinaturaDto);
  }

  @Get()
  findAll() {
    return this.assinaturaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const assinatura = await this.assinaturaService.findOne(id);
    if (!assinatura) throw new NotFoundException();
    return assinatura;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAssinaturaDto: UpdateAssinaturaDto,
  ) {
    const assinatura = await this.assinaturaService.update(
      id,
      updateAssinaturaDto,
    );
    if (!assinatura) throw new NotFoundException();
    return assinatura;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const assinatura = await this.assinaturaService.remove(id);
    if (!assinatura) throw new NotFoundException();
  }
}
