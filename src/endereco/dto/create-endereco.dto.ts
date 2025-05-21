import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsPostalCode,
} from 'class-validator';

export class CreateEnderecoDto {
  @IsNotEmpty()
  @IsPostalCode('BR')
  cep: string;

  @IsNotEmpty()
  @IsString()
  rua: string;

  @IsNotEmpty()
  @IsNumber()
  numero: number;

  @IsOptional()
  @IsString()
  complemento?: string;

  @IsNotEmpty()
  @IsString()
  bairro: string;

  @IsNotEmpty()
  @IsString()
  cidade: string;

  @IsNotEmpty()
  @IsString()
  estado: string;

  @IsOptional()
  @IsString()
  referencia?: string;

  @IsOptional()
  @IsString()
  tipo?: string; // ex: 'residencial' | 'comercial'
}
