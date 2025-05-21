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
import { CartaoService } from './cartao.service';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { UpdateCartaoDto } from './dto/update-cartao.dto';

@Controller('cartao')
export class CartaoController {
  constructor(private readonly cartaoService: CartaoService) {}

  @Post()
  create(@Body() createCartaoDto: CreateCartaoDto) {
    return this.cartaoService.create(createCartaoDto);
  }

  @Get()
  findAll() {
    return this.cartaoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const cartao = await this.cartaoService.findOne(id);
    if (!cartao) throw new NotFoundException();
    return cartao;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCartaoDto: UpdateCartaoDto,
  ) {
    const cartao = await this.cartaoService.update(id, updateCartaoDto);
    if (!cartao) throw new NotFoundException();
    return cartao;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const cartao = await this.cartaoService.remove(id);
    if (!cartao) throw new NotFoundException();
  }
}
