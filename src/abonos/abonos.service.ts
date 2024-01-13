import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository, UpdateResult } from 'typeorm';
import { Abonos } from './abonos.entity';
import { GenericService } from 'src/generic/generic.service';
import { Prestamos } from 'src/prestamos/prestamos.entity';
import { AbonarPrestamoDto } from './dto/abonar-prestamo.dto';
import { Inversiones } from 'src/inversiones/inversiones.entity';
import { Fuentes } from 'src/fuentes/fuentes.entity';

@Injectable()
export class AbonosService extends GenericService<Abonos> {
  constructor(
    @InjectRepository(Abonos) abonosRepository: Repository<Abonos>,
    @InjectRepository(Prestamos) private prestamosRepository: Repository<Prestamos>,
    private readonly entityManager: EntityManager,
  ) {
    super(abonosRepository);
  }

    async calcularMontoRestante(idPrestamo: number): Promise<number> {
    const prestamo = await this.prestamosRepository.findOne({where: {id: idPrestamo}});
    if (!prestamo) {
      throw new BadRequestException('No se encontró el préstamo');
    }

    return prestamo.montoRestante;
  }

  async actualizarMontoRestante(idPrestamo: number, cantidadAbono: number): Promise<UpdateResult> {
    return this.prestamosRepository.update(idPrestamo, {
      montoRestante: () => `montoRestante - ${cantidadAbono}`,
      pagado: () => `montoRestante <= 0`,
    });
  }

  async abonarAPrestamo(abonardto: AbonarPrestamoDto): Promise<Abonos> {
    const { idPrestamo, cantidad, metodo_entrada, comentario } = abonardto;
  
    // Obtener el préstamo al que se desea abonar
    const prestamo = await this.prestamosRepository.findOne({ where: { id: idPrestamo } });
    console.log(prestamo)
    if (!prestamo) {
      throw new BadRequestException('No se encontró el préstamo');
    }
  
    // Verificar si la cantidad a abonar es válida
    if (cantidad <= 0 || cantidad > prestamo.cantidad) {
      throw new BadRequestException('La cantidad a abonar no es válida');
    }
  
    // Realizar el abono
    const abono = new Abonos();
    abono.cantidad = cantidad;
    abono.id_prestamo = idPrestamo;
    abono.metodo_entrada = metodo_entrada;
    abono.comentario = comentario;
    abono.fecha = new Date();
  
    // Obtener las fuentes relacionadas con el préstamo
    const fuentes = await this.entityManager.find(Fuentes, {
      where: { id_prestamo: idPrestamo },
      relations: ['inversion'], // Incluir la relación con Inversiones
    });    
    console.log(fuentes)
    // Calcular la proporción de abono para ajustar la cantidad en cada inversión
    const proporcionAbono = cantidad / prestamo.cantidad;
  
    // Revertir el abono en las inversiones
    for (const fuente of fuentes) {
      // Calcular la cantidad a agregar a la cantidad_disponible de la inversión correspondiente
      const cantidadAdicional = fuente.cantidad * proporcionAbono;
      // Sumar la cantidad calculada a la cantidad_disponible de la inversión correspondiente
      fuente.inversion.cantidad_disponible += cantidadAdicional;
    }
  
    // Guardar los cambios en la base de datos
    await this.entityManager.save(Abonos, abono);
    await this.entityManager.save(Prestamos, prestamo);
    await this.entityManager.save(Fuentes, fuentes);
    // Ajustar las cantidades en las inversiones
    await this.entityManager.save(Inversiones, fuentes.map(fuente => fuente.inversion));
  
    return abono;
  }
  
}
