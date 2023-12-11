import { Controller } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { Personas } from './personas.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('personas')
export class PersonasController extends GenericController<Personas, PersonasService> {
  constructor(private readonly personasService: PersonasService) {
    super(personasService);
  }
}

