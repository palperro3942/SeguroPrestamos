import { Module } from '@nestjs/common';
import { InversionistaService } from './inversionista.service';
import { InversionistaController } from './inversionista.controller';

@Module({
  providers: [InversionistaService],
  controllers: [InversionistaController]
})
export class InversionistaModule {}
