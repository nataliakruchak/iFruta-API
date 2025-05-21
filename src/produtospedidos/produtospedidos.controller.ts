import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { ProdutospedidosService } from './produtospedidos.service';
import { CreateProdutospedidoDto } from './dto/create-produtospedido.dto';
import { UpdateProdutospedidoDto } from './dto/update-produtospedido.dto';

@Controller('produtospedidos')
export class ProdutospedidosController {
  constructor(
    private readonly produtospedidosService: ProdutospedidosService,
  ) {}

  @Post()
  create(@Body() createProdutospedidoDto: CreateProdutospedidoDto) {
    return this.produtospedidosService.create(createProdutospedidoDto);
  }

  @Get()
  findAll() {
    return this.produtospedidosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const produtopeditos = await this.produtospedidosService.findOne(id);
    if (!produtopeditos) throw new NotFoundException();
    return produtopeditos;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProdutospedidoDto: UpdateProdutospedidoDto,
  ) {
    const produtospedido = await this.produtospedidosService.update(id, updateProdutospedidoDto);
    if (!produtospedido) throw new NotFoundException();
    return produtospedido;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const produtospedido = await this.produtospedidosService.remove(id);
    if (!produtospedido) throw new NotFoundException();
  }
}
