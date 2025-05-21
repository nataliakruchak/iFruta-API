import { Test, TestingModule } from '@nestjs/testing';
import { ProdutospedidosController } from './produtospedidos.controller';
import { ProdutospedidosService } from './produtospedidos.service';

describe('ProdutospedidosController', () => {
  let controller: ProdutospedidosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutospedidosController],
      providers: [ProdutospedidosService],
    }).compile();

    controller = module.get<ProdutospedidosController>(ProdutospedidosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
