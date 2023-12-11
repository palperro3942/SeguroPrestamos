import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { Clientes } from 'src/clientes/clientes.entity';
import { Abonos } from 'src/abonos/abonos.entity';

@Entity()
export class Prestamos extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'int' })
  id_cliente: number;

  @Column({ type: 'int' })
  id_prestamo: number;

  @Column({ type: 'decimal' })
  cantidad: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  interes: number;

  @Column({ type: 'varchar' })
  metodo_salida: string;

  @Column({ type: 'varchar' })
  origen_fuente: string;

  @Column({ type: 'text' })
  garantia: string;

  // Relaciones
  @OneToMany(() => Clientes, cliente => cliente.prestamo)
  @JoinColumn({name: 'id_cliente'})
  cliente: Clientes;

  @OneToMany(() => Abonos, abono => abono.prestamo)  // Corrección aquí
  abonos: Abonos;
}
