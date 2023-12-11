import { Controller } from '@nestjs/common';
import { DireccionesService } from './direcciones.service';
import { Direcciones } from './direcciones.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('direcciones')
export class DireccionesController extends GenericController<Direcciones, DireccionesService> {
  constructor(private readonly direccionesService: DireccionesService) {
    super(direccionesService);
  }
}

