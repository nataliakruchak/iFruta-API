import { Injectable } from '@nestjs/common';
import { CreateCuponDto } from './dto/create-cupon.dto';
import { UpdateCuponDto } from './dto/update-cupon.dto';
import { Repository } from 'typeorm';
import { Cupon } from './entities/cupon.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CuponsService {
  constructor(
    @InjectRepository(Cupon)
    private readonly repository: Repository<Cupon>,
  ) {}

  create(dto: CreateCuponDto) {
    const cupon = this.repository.create(dto);
    return this.repository.save(cupon);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateCuponDto) {
    const cupon = await this.repository.findOneBy({ id });
    if (!cupon) return null;
    this.repository.merge(cupon, dto);
    return this.repository.save(cupon);
  }

  async remove(id: string) {
    const cupon = await this.repository.findOneBy({ id });
    if (!cupon) return null;
    return this.repository.remove(cupon);
  }
}
