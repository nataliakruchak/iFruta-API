import {
  IsNumber,
  IsString,
  IsDateString,
  IsInt,
  IsArray,
} from 'class-validator';

export class CreatePedidoDto {
  @IsNumber()
  valorTotal: number;

  @IsString()
  status: string;

  @IsDateString()
  dataPedido: Date;
}
