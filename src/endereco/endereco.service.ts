import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Endereco } from './entities/endereco.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectRepository(Endereco)
    private readonly repository: Repository<Endereco>,
  ) {}

  create(dto: CreateEnderecoDto) {
    const endereco = this.repository.create(dto);
    return this.repository.save(endereco);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id: Number(id) });
  }

  async update(id: string, dto: UpdateEnderecoDto) {
    const endereco = await this.repository.findOneBy({ id: Number(id) });
    if (!endereco) return null;
    this.repository.merge(endereco, dto);
    return this.repository.save(endereco);
  }

  async remove(id: string) {
    const endereco = await this.repository.findOneBy({ id: Number(id) });
    if (!endereco) return null;
    return this.repository.remove(endereco);
  }
}
