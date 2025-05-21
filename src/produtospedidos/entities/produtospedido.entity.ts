import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Produto } from 'src/produtos/entities/produto.entity';
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  BeforeInsert,
} from 'typeorm';

const { nanoid } = require('nanoid');

@Entity('produtospedido')
export class Produtospedido {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Produto, {
    eager: true,
  })
  @JoinColumn({ name: 'produtoId' })
  produto: Produto;

  @ManyToOne(() => Pedido, {
    eager: true,
  })
  @JoinColumn({ name: 'pedidoId' })
  pedido: Pedido;

  @Column()
  status: string;

  @BeforeInsert()
  generateId() {
    this.id = `pp_${nanoid()}`;
  }
}
