import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrestamosController } from './prestamos.controller';
import { PrestamosService } from './prestamos.service';
import { Prestamos } from './prestamos.entity';
import { Inversiones } from 'src/inversiones/inversiones.entity';
import { Clientes } from 'src/clientes/clientes.entity';
import { Fuentes } from 'src/fuentes/fuentes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prestamos, Inversiones, Clientes, Fuentes])],
  controllers: [PrestamosController],
  providers: [PrestamosService],
})
export class PrestamosModule {}