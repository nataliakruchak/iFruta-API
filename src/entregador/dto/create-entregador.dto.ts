import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class CreateEntregadorDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  telefone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
