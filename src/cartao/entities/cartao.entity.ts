import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  BeforeInsert,
} from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity'; // Ajuste o caminho conforme necessário

const { nanoid } = require('nanoid');

@Entity('cartoes')
export class Cartao {
  @PrimaryColumn()
  id: string; // ID único para o cartão (gerado automaticamente)

  @Column()
  numero: string; // Número do cartão (como string para preservar zeros à esquerda)

  @Column()
  nomeTitular: string; // Nome do titular do cartão

  @Column({ type: 'varchar', length: 5 })
  validade: string; 

  @Column({type: 'varchar', length: 3 })
  cvv: string; // Código de segurança (CVV) do cartão

  @BeforeInsert()
  generateId() {
    this.id = `cart_${nanoid()}`;
  }
}
