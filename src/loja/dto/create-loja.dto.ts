import { IsString, IsEmail } from 'class-validator';

export class CreateLojaDto {
  @IsString()
  nome: string;

  @IsString()
  cnpj: string;

  @IsEmail()
  email: string;

  @IsString()
  telefone: string;

  @IsString()
  endereco: string;
}
