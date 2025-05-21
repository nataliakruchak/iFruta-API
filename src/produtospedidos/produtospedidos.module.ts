import { Module } from '@nestjs/common';
import { ProdutospedidosService } from './produtospedidos.service';
import { ProdutospedidosController } from './produtospedidos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtospedido } from './entities/produtospedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produtospedido])],
  controllers: [ProdutospedidosController],
  providers: [ProdutospedidosService],
})
export class ProdutospedidosModule {}
