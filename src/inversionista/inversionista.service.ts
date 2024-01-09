// inversionista.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inversionista } from './inversionista.entity';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class InversionistaService extends GenericService<Inversionista> {
  constructor(
    @InjectRepository(Inversionista) inversionistaRepository: Repository<Inversionista>,
  ) {
    super(inversionistaRepository);
  }
}