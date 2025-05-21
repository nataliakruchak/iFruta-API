import { IsString, IsEmail } from 'class-validator';

const { nanoid } = require('nanoid');

export class CreateClienteDto {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  telefone: string;
}
