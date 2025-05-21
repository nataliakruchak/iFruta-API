import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutospedidoDto } from './create-produtospedido.dto';

export class UpdateProdutospedidoDto extends PartialType(CreateProdutospedidoDto) {}
