import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  BeforeInsert,
} from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity'; // Ajuste o caminho conforme necessário

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { nanoid } = require('nanoid');

@Entity('cupons')
export class Cupon {
  @PrimaryColumn()
  id: string; // ID único para cada cupom

  @Column({ type: 'varchar', length: 100 })
  codigo: string; // Código único do cupom

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valorDesconto: number; // Valor do desconto proporcionado pelo cupom

  @Column({ type: 'varchar', length: 10 })
  dataValidade: string; // Data de validade do cupom (formato MM/AA)

  @ManyToOne(() => Cliente, { eager: true })
  cliente: Cliente; // Relacionamento com a entidade Cliente

  @BeforeInsert()
  generateId() {
    this.id = `cup_${nanoid()}`;
  }
}
