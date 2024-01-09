import { Controller, Post, Body, Get } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { Prestamos } from './prestamos.entity';
import { RealizarPrestamoDto } from './dto/realizar-prestamo.dto';
import { GenericController } from 'src/generic/generic.controller';

@Controller('prestamos')
export class PrestamosController extends GenericController<Prestamos, PrestamosService> {
  constructor(private readonly prestamosService: PrestamosService) {
    super(prestamosService);
  }

  @Get()
  async findAll(): Promise<Prestamos[]> {
    return this.prestamosService.consultarPrestamos();
  }

  @Post()
  async realizarPrestamo(@Body() data: RealizarPrestamoDto): Promise<Prestamos> {
    return this.prestamosService.realizarPrestamo(data);
  }
}