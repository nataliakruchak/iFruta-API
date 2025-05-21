import { Injectable } from '@nestjs/common';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { UpdateCartaoDto } from './dto/update-cartao.dto';
import { Repository } from 'typeorm';
import { Cartao } from './entities/cartao.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CartaoService {
  constructor(
    @InjectRepository(Cartao)
    private readonly repository: Repository<Cartao>,
  ) {}

  create(dto: CreateCartaoDto) {
    const cartao = this.repository.create(dto);
    return this.repository.save(cartao);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateCartaoDto) {
    const cartao = await this.repository.findOneBy({ id });
    if (!cartao) return null;
    this.repository.merge(cartao, dto);
    return this.repository.save(cartao);
  }

  async remove(id: string) {
    const cartao = await this.repository.findOneBy({ id });
    if (!cartao) return null;
    return this.repository.remove(cartao);
  }
}
