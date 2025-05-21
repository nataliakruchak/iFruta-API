import { Injectable } from '@nestjs/common';
import { CreateEntregadorDto } from './dto/create-entregador.dto';
import { UpdateEntregadorDto } from './dto/update-entregador.dto';
import { Entregador } from './entities/entregador.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EntregadorService {
  constructor(
    @InjectRepository(Entregador)
    private readonly repository: Repository<Entregador>,
  ) {}

  create(dto: CreateEntregadorDto) {
    const entregador = this.repository.create(dto);
    return this.repository.save(entregador);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateEntregadorDto) {
    const entregador = await this.repository.findOneBy({ id });
    if (!entregador) return null;
    this.repository.merge(entregador, dto);
    return this.repository.save(entregador);
  }

  async remove(id: string) {
    const entregador = await this.repository.findOneBy({ id });
    if (!entregador) return null;
    return this.repository.remove(entregador);
  }
}
