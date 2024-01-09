import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager, MoreThan } from 'typeorm';
import { Prestamos } from './prestamos.entity';
import { Inversiones } from 'src/inversiones/inversiones.entity';
import { Clientes } from 'src/clientes/clientes.entity';
import { GenericService } from 'src/generic/generic.service';
import { RealizarPrestamoDto } from './dto/realizar-prestamo.dto';
import { Fuentes } from 'src/fuentes/fuentes.entity';

@Injectable()
export class PrestamosService extends GenericService<Prestamos> {
  constructor(
    @InjectRepository(Prestamos) prestamosRepository: Repository<Prestamos>,
    @InjectRepository(Inversiones) private inversionesRepository: Repository<Inversiones>,
    @InjectRepository(Clientes) private clientesRepository: Repository<Clientes>,
    @InjectRepository(Fuentes) private fuentesRepository: Repository<Fuentes>,
    private readonly entityManager: EntityManager,
  ) {
    super(prestamosRepository);
  }

  async consultarPrestamos(): Promise<Prestamos[]> {
    return this.find({
      relations: ['cliente'], // Incluye la relación con la entidad Clientes
    });
  }


  async realizarPrestamo(data: RealizarPrestamoDto): Promise<Prestamos> {
    // Obtener todas las inversiones con cantidad disponible > 0
    const inversiones = await this.inversionesRepository.find({
      where: { cantidad_disponible: MoreThan(0) },
    });

    // Calcular la cantidad disponible sumando todas las inversiones
    let cantidadDisponible = inversiones.reduce((total, inversion) => total + inversion.cantidad_disponible, 0);

    // Verificar si hay suficiente dinero disponible
    if (cantidadDisponible < data.cantidad) {
      throw new BadRequestException('Dinero de inversiones insuficiente para realizar el préstamo');
    }

    // Realizar el préstamo
    const prestamo = new Prestamos();
    prestamo.cantidad = data.cantidad;
    prestamo.id = data.id_inversion;
    prestamo.id_cliente = data.id_cliente;
    prestamo.interes = data.interes;
    prestamo.metodo_salida = data.metodo_salida;
    prestamo.origen_fuente = data.origen_fuente;
    prestamo.garantia = data.garantia;
    prestamo.fecha = data.fecha;

    // Actualizar la cantidad disponible en las inversiones y registrar fuentes
    const fuentes: Fuentes[] = [];
    let cantidadRestante = data.cantidad;
    
    for (const inversion of inversiones) {
      const cantidadTomada = Math.min(cantidadRestante, inversion.cantidad_disponible);
    
      if (cantidadTomada > 0) {
        inversion.cantidad_disponible -= cantidadTomada;
        fuentes.push(this.crearFuente(prestamo, inversion, cantidadTomada));
      }
    
      cantidadRestante -= cantidadTomada;
    
      if (cantidadRestante <= 0) {
        break;
      }
    }

    // Guardar cambios en la base de datos
    await this.entityManager.save(Prestamos, prestamo);
    await this.entityManager.save(Inversiones, inversiones);
    await this.entityManager.save(Fuentes, fuentes);

    return prestamo;
  }

  private crearFuente(prestamo: Prestamos, inversion: Inversiones, cantidad: number): Fuentes {
    const fuente = new Fuentes();
    fuente.prestamo = prestamo;
    fuente.inversion = inversion;
    fuente.cantidad = cantidad;
    return fuente;
  }
}