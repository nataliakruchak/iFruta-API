import { Test, TestingModule } from '@nestjs/testing';
import { ProdutospedidosService } from './produtospedidos.service';

describe('ProdutospedidosService', () => {
  let service: ProdutospedidosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutospedidosService],
    }).compile();

    service = module.get<ProdutospedidosService>(ProdutospedidosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
