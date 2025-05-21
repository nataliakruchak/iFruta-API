import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private readonly repository: Repository<Pedido>,
  ) {}

  create(dto: CreatePedidoDto) {
    const pedido = this.repository.create(dto);
    return this.repository.save(pedido);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdatePedidoDto) {
    const pedido = await this.repository.findOneBy({ id });
    if (!pedido) return null;
    this.repository.merge(pedido, dto);
    return this.repository.save(pedido);
  }

  async remove(id: string) {
    const produto = await this.repository.findOneBy({ id });
    if (!produto) return null;
    return this.repository.remove(produto);
  }
}
