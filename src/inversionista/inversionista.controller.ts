// inversionista.controller.ts
import { Controller, Get } from '@nestjs/common';
import { InversionistaService } from './inversionista.service';
import { Inversionista } from './inversionista.entity';
import { GenericController } from 'src/generic/generic.controller';

@Controller('inversionistas')
export class InversionistaController extends GenericController<Inversionista, InversionistaService> {
  constructor(private readonly inversionistaService: InversionistaService) {
    super(inversionistaService);
  }
  
}