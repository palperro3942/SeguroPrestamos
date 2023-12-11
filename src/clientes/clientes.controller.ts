import { Controller } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { Clientes } from './clientes.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('clientes')
export class ClientesController extends GenericController<Clientes, ClientesService> {
  constructor(private readonly clientesService: ClientesService) {
    super(clientesService);
  }
}

