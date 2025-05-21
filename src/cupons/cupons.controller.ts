import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  NotFoundException,
} from '@nestjs/common';
import { CuponsService } from './cupons.service';
import { CreateCuponDto } from './dto/create-cupon.dto';
import { UpdateCuponDto } from './dto/update-cupon.dto';

@Controller('cupons')
export class CuponsController {
  constructor(private readonly cuponsService: CuponsService) {}

  @Post()
  create(@Body() createCuponDto: CreateCuponDto) {
    return this.cuponsService.create(createCuponDto);
  }

  @Get()
  findAll() {
    return this.cuponsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const cupon = await this.cuponsService.findOne(id);
    if (!cupon) throw new NotFoundException();
    return cupon;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCuponDto: UpdateCuponDto,
  ) {
    const cupon = await this.cuponsService.update(id, updateCuponDto);
    if (!cupon) throw new NotFoundException();
    return cupon;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const cupon = await this.cuponsService.remove(id);
    if (!cupon) throw new NotFoundException();
  }
}
