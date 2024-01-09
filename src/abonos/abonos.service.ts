import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Abonos } from './abonos.entity';
import { GenericService } from 'src/generic/generic.service';
import { Prestamos } from 'src/prestamos/prestamos.entity';

@Injectable()
export class AbonosService extends GenericService<Abonos> {
  constructor(
    @InjectRepository(Abonos) abonosRepository: Repository<Abonos>,
    @InjectRepository(Prestamos) private prestamosRepository: Repository<Prestamos>,
    private readonly entityManager: EntityManager,
  ) {
    super(abonosRepository);
  }

  async abonarAPrestamo(data: any): Promise<Abonos> {
    const { idPrestamo, cantidad } = data;
    // Obtener el préstamo al que se le realizará el abono
    const prestamo = await this.prestamosRepository.findOne({where: {id: idPrestamo}});

    if (!prestamo) {
      // Manejar el caso en el que no se encuentra el préstamo
      // Puedes lanzar una excepción o manejarlo según tus necesidades
      throw new Error('Préstamo no encontrado');
    }

    // Crear el abono
    const abono = new Abonos();
    abono.fecha = new Date();
    abono.id_prestamo = idPrestamo;
    abono.cantidad = cantidad;

    // Actualizar el saldo del préstamo
    prestamo.cantidad -= cantidad;

    // Guardar el abono y actualizar el préstamo en la base de datos
    await this.entityManager.save(Abonos, abono);
    await this.entityManager.save(Prestamos, prestamo);

    return abono;
  }
}
