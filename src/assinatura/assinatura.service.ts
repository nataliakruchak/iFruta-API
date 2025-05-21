import { Injectable } from '@nestjs/common';
import { CreateAssinaturaDto } from './dto/create-assinatura.dto';
import { UpdateAssinaturaDto } from './dto/update-assinatura.dto';
import { Repository } from 'typeorm';
import { Assinatura } from './entities/assinatura.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AssinaturaService {
  constructor(
    @InjectRepository(Assinatura)
    private readonly repository: Repository<Assinatura>,
  ) {}

  create(dto: CreateAssinaturaDto) {
    const assinatura = this.repository.create(dto);
    return this.repository.save(assinatura);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateAssinaturaDto) {
    const assinatura = await this.repository.findOneBy({ id });
    if (!assinatura) return null;
    this.repository.merge(assinatura, dto);
    return this.repository.save(assinatura);
  }

  async remove(id: string) {
    const assinatura = await this.repository.findOneBy({ id });
    if (!assinatura) return null;
    return this.repository.remove(assinatura);
  }
}
