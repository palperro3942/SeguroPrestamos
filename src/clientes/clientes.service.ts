import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clientes } from './clientes.entity';
import { GenericService } from 'src/generic/generic.service';

@Injectable()
export class ClientesService extends GenericService<Clientes> {
  constructor(
    @InjectRepository(Clientes)
    private readonly clientesRepository: Repository<Clientes>,
  ) {
    super(clientesRepository);
  }
}

