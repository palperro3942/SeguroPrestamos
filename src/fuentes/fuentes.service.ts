import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fuentes } from './fuentes.entity';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class FuentesService extends GenericService<Fuentes> {
  constructor(
    @InjectRepository(Fuentes) fuentesRepository: Repository<Fuentes>,
  ) {
    super(fuentesRepository);
  }
}