import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbonosController } from './abonos.controller';
import { AbonosService } from './abonos.service';
import { Abonos } from './abonos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Abonos])],
  controllers: [AbonosController],
  providers: [AbonosService],
})
export class AbonosModule {}