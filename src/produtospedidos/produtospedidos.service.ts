import { Injectable } from '@nestjs/common';
import { CreateProdutospedidoDto } from './dto/create-produtospedido.dto';
import { UpdateProdutospedidoDto } from './dto/update-produtospedido.dto';
import { Produtospedido } from './entities/produtospedido.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdutospedidosService {
  constructor(
    @InjectRepository(Produtospedido)
    private readonly repository: Repository<Produtospedido>,
  ) {}

  create(dto: CreateProdutospedidoDto) {
    const produtospedido = this.repository.create(dto);
    return this.repository.save(produtospedido);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateProdutospedidoDto) {
    const produtospedido = await this.repository.findOneBy({ id });
    if (!produtospedido) return null;
    this.repository.merge(produtospedido, dto);
    return this.repository.save(produtospedido);
  }

  async remove(id: string) {
    const produtospedido = await this.repository.findOneBy({ id });
    if (!produtospedido) return null;
    return this.repository.remove(produtospedido);
  }
}
