import { BeforeInsert, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Produtospedido } from 'src/produtospedidos/entities/produtospedido.entity';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
const { nanoid } = require('nanoid');

@Entity('produtos')
export class Produto {
  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  preco_unitario: number;

  @Column()
  estoque: number;

  @OneToMany(() => Produtospedido, (pp) => pp.produto)
  produtospedidos: Produtospedido[];

  @BeforeInsert()
  generateId() {
    this.id = `prod_${nanoid()}`;
  }
}
