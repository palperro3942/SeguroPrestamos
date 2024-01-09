// inversiones.controller.ts
import { Controller, Get } from '@nestjs/common';
import { InversionesService } from './inversiones.service';
import { Inversiones } from './inversiones.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('inversiones')
export class InversionesController extends GenericController<Inversiones, InversionesService> {
  constructor(private readonly inversionesService: InversionesService) {
    super(inversionesService);
  }
  
  @Get()
  async consultarInversiones(): Promise<Inversiones[]> {
    return this.inversionesService.consultarInversiones();
  }
}