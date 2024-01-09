import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InversionistaController } from './inversionista.controller';
import { InversionistaService } from './inversionista.service';
import { Inversionista } from './inversionista.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inversionista])],
  controllers: [InversionistaController],
  providers: [InversionistaService],
})
export class InversionistaModule {}