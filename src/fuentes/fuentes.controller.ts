import { Controller } from '@nestjs/common';
import { FuentesService } from './fuentes.service';
import { Fuentes } from './fuentes.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('fuentes')
export class FuentesController extends GenericController<Fuentes, FuentesService> {
  constructor(private readonly fuentesService: FuentesService) {
    super(fuentesService);
  }
}

