import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fuentes } from './fuentes.entity';
import { FuentesService } from './fuentes.service';
import { FuentesController } from './fuentes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Fuentes])],
  providers: [FuentesService],
  controllers: [FuentesController],
})
export class FuentesModule {}