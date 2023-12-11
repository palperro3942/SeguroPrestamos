import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Personas } from './personas.entity';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class PersonasService extends GenericService<Personas> {
  constructor(
    @InjectRepository(Personas)
    private readonly personasRepository: Repository<Personas>,
  ) {
    super(personasRepository);
  }
}

