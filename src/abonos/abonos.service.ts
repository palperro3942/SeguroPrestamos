import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Abonos } from './abonos.entity';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class AbonosService extends GenericService<Abonos> {
  constructor(
    @InjectRepository(Abonos)
    private readonly abonosRepository: Repository<Abonos>,
  ) {
    super(abonosRepository);
  }
}
