// prestamos.entity.ts
import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { Clientes } from 'src/clientes/clientes.entity';
import { Abonos } from 'src/abonos/abonos.entity';
import { Inversiones } from 'src/inversiones/inversiones.entity';

@Entity()
export class Prestamos extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha: Date;

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
  @ManyToOne(() => Clientes, cliente => cliente.prestamo)
  @JoinColumn({ name: 'id_cliente' })
  cliente: Clientes;

  @ManyToOne(() => Inversiones, inversion => inversion.prestamos)
  @JoinColumn({ name: 'id_inversion' })
  inversion: Inversiones;

  @OneToMany(() => Abonos, abono => abono.prestamo)
  abonos: Abonos;
}
