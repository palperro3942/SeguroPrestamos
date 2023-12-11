import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Direcciones } from './direcciones.entity';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class DireccionesService extends GenericService<Direcciones> {
  constructor(
    @InjectRepository(Direcciones)
    private readonly direccionesRepository: Repository<Direcciones>,
  ) {
    super(direccionesRepository);
  }
}

