import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { nanoid } = require('nanoid');

@Entity('loja')
export class Loja {
  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  cnpj: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  endereco: string;

  @BeforeInsert()
  generateId(): void {
    this.id = `loj_${nanoid()}`;
  }
}
