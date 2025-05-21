import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('entregadores')
export class Entregador {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  email: string;
}
