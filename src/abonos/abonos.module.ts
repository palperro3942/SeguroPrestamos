import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbonosController } from './abonos.controller';
import { AbonosService } from './abonos.service';
import { Abonos } from './abonos.entity';
import { Prestamos } from 'src/prestamos/prestamos.entity';
import { Inversiones } from 'src/inversiones/inversiones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Abonos, Prestamos, Inversiones])],
  controllers: [AbonosController],
  providers: [AbonosService],
})

export class AbonosModule {}