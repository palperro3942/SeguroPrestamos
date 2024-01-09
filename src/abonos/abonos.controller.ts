import { Body, Controller, Post } from '@nestjs/common';
import { AbonosService } from './abonos.service';
import { Abonos } from './abonos.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('abonos')
export class AbonosController extends GenericController<Abonos, AbonosService> {
  constructor(private readonly abonosService: AbonosService) {
    super(abonosService);
  }

  @Post()
  async abonarAPrestamo(@Body() data:any): Promise<Abonos> {
    return this.abonosService.abonarAPrestamo(data);
  }
}

