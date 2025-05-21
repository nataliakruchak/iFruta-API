import {
  IsDateString,
  IsNumberString,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateCartaoDto {
  @IsString()
  numero: string;

  @IsString()
  nomeTitular: string;

  @Matches(/^(\d{2})\/(\d{2})$/, {
    message: 'validade deve estar no formato MM/AA',
  })
  validade: string; // Data de validade do cartão no formato MM/AA

  @IsNumberString()
  @Length(3, 3)
  cvv: string;
}
