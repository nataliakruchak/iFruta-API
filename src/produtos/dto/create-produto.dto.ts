import { IsNumber, IsString } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  nome: string;

  @IsNumber({ maxDecimalPlaces: 2 }) // você pode limitar casas decimais se quiser
  preco_unitario: number;

  @IsNumber()
  estoque: number;
}
