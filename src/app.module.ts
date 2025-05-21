import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LojaModule } from './loja/loja.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ClienteModule } from './cliente/cliente.module';
import { CartaoModule } from './cartao/cartao.module';
import { CuponsModule } from './cupons/cupons.module';
import { AssinaturaModule } from './assinatura/assinatura.module';
import { EntregadorModule } from './entregador/entregador.module';
import { ProdutospedidosModule } from './produtospedidos/produtospedidos.module';
import { EnderecoModule } from './endereco/endereco.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProdutosModule,
    LojaModule,
    PedidosModule,
    ClienteModule,
    CartaoModule,
    CuponsModule,
    AssinaturaModule,
    EntregadorModule,
    ProdutospedidosModule,
    EnderecoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
