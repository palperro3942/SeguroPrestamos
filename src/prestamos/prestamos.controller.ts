import { Controller } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { Prestamos } from './prestamos.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('prestamos')
export class PrestamosController extends GenericController<Prestamos, PrestamosService> {
  constructor(private readonly prestamosService: PrestamosService) {
    super(prestamosService);
  }
}
