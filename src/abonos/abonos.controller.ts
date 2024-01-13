import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AbonosService } from './abonos.service';
import { Abonos } from './abonos.entity';
import { GenericController } from 'src/generic/generic.controller';
import { AbonarPrestamoDto } from './dto/abonar-prestamo.dto';

@Controller('abonos')
export class AbonosController extends GenericController<Abonos, AbonosService> {
  constructor(private readonly abonosService: AbonosService) {
    super(abonosService);
  }

  @Post()
  async abonarAPrestamo(@Body() abonarPrestamoDto: AbonarPrestamoDto): Promise<Abonos> {
    const montoRestante = await this.abonosService.calcularMontoRestante(abonarPrestamoDto.idPrestamo);

    if (abonarPrestamoDto.cantidad > montoRestante) {
      throw new BadRequestException('La cantidad a abonar es mayor que el monto restante');
    }
    
    const abono = await this.abonosService.abonarAPrestamo(abonarPrestamoDto);
    
    // Actualizar el monto restante en el préstamo
    await this.abonosService.actualizarMontoRestante(abonarPrestamoDto.idPrestamo, abonarPrestamoDto.cantidad);

    return abono;
  }
}

