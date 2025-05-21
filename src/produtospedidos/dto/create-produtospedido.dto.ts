import { IsNumber, IsString } from 'class-validator';

export class CreateProdutospedidoDto {
  @IsString()
  pedidoId: string;

  @IsString()
  produtoId: string;

  @IsString()
  status: string;
}
