import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InversionesController } from './inversiones.controller';
import { InversionesService } from './inversiones.service';
import { Inversiones } from './inversiones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inversiones])],
  controllers: [InversionesController],
  providers: [InversionesService],
})
export class InversionesModule {}