// inversiones.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inversiones } from './inversiones.entity';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class InversionesService extends GenericService<Inversiones> {
  constructor(
    @InjectRepository(Inversiones) inversionesRepository: Repository<Inversiones>,
  ) {
    super(inversionesRepository);
  }

  async consultarInversiones(): Promise<Inversiones[]> {
    return this.find({
      relations: ['inversionista'], // Incluye la relación con el inversionista
    });
  }

}
