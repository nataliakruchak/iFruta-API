import { IsDateString, IsString, IsNumber } from 'class-validator';

export class CreateAssinaturaDto {
  @IsDateString()
  dataInicio: string;

  @IsDateString()
  dataFim: string;

  @IsNumber()
  valor: number;

  @IsString()
  clienteId: string;
}
