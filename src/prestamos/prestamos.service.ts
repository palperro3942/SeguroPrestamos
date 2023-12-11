import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prestamos } from './prestamos.entity';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class PrestamosService extends GenericService<Prestamos> {
  constructor(
    @InjectRepository(Prestamos)
    private readonly prestamosRepository: Repository<Prestamos>,
  ) {
    super(prestamosRepository);
  }
}

