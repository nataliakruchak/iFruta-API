import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  OneToOne,
} from 'typeorm';

import { Cliente } from 'src/cliente/entities/cliente.entity';
const { nanoid } = require('nanoid');

@Entity('assinaturas')
export class Assinatura {
  @PrimaryColumn()
  id: string;

  @Column()
  dataInicio: string;

  @Column()
  dataFim: string;

  @Column('decimal', { precision: 10, scale: 2 })
  valor: number;

  @OneToOne(() => Cliente, (cliente) => cliente.assinatura)
  cliente: Cliente;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  generateId() {
    this.id = `ass_${nanoid()}`;
  }
}
