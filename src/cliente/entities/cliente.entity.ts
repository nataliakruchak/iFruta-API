import {
  BeforeInsert,
  Column,
  Entity,
  PrimaryColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Endereco } from '../../endereco/entities/endereco.entity';
import { Cupon } from '../../cupons/entities/cupon.entity';
import { Assinatura } from 'src/assinatura/entities/assinatura.entity';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { nanoid } = require('nanoid');

@Entity('clientes')
export class Cliente {
  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @OneToMany(() => Endereco, (endereco) => endereco.cliente)
  enderecos: Endereco[];

  @OneToMany(() => Cupon, (cupon) => cupon.cliente) // Relacionamento um para muitos
  cupons: Cupon[];

  @OneToOne(() => Assinatura, (assinatura) => assinatura.cliente)
  assinatura: Assinatura;

  @BeforeInsert()
  generateId() {
    this.id = `cli_${nanoid()}`;
  }
}
