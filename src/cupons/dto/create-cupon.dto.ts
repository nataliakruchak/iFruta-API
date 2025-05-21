import { IsString, IsNumber, IsDateString, Min } from 'class-validator';

export class CreateCuponDto {
  @IsString()
  codigo: string; // Código único do cupom

  @IsNumber()
  @Min(0)
  valorDesconto: number; // Valor do desconto proporcionado pelo cupom

  @IsDateString()
  dataValidade: string; // Data de validade do cupom
}