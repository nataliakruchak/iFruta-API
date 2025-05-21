import { Module } from '@nestjs/common';
import { CartaoService } from './cartao.service';
import { CartaoController } from './cartao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cartao } from './entities/cartao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cartao])],
  controllers: [CartaoController],
  providers: [CartaoService],
})
export class CartaoModule {}
