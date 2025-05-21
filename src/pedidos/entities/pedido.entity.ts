import { Produtospedido } from 'src/produtospedidos/entities/produtospedido.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { nanoid } = require('nanoid');

@Entity('pedidos')
export class Pedido {
  @PrimaryColumn()
  id: string;

  @Column('decimal')
  valorTotal: number;

  @Column()
  status: string;

  @Column()
  dataPedido: Date;

  @OneToMany(() => Produtospedido, (pp) => pp.pedido)
  produtospedidos: Produtospedido[];

  @BeforeInsert()
  generateId() {
    this.id = `pedid_${nanoid()}`;
  }
}
