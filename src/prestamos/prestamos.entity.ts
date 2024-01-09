// prestamos.entity.ts
import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Clientes } from 'src/clientes/clientes.entity';
import { Abonos } from 'src/abonos/abonos.entity';
import { Inversiones } from 'src/inversiones/inversiones.entity';
import { Fuentes } from 'src/fuentes/fuentes.entity';

@Entity()
export class Prestamos extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'decimal' })
  cantidad: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0})
  interes: number;

  @Column({ type: 'varchar' })
  metodo_salida: string;

  @Column({ type: 'varchar' })
  origen_fuente: string;

  @Column({ type: 'text', default: null })
  garantia: string;

  @Column({ type: 'int' })
  id_cliente: number;

  // Relaciones
  @ManyToOne(() => Clientes, cliente => cliente.prestamo)
  @JoinColumn({ name: 'id_cliente' })
  cliente: Clientes;

  @OneToMany(() => Abonos, abono => abono.prestamo)
  abonos: Abonos;

  @ManyToOne(() => Inversiones, inversion => inversion.id)
  @JoinColumn({ name: 'id_inversion' })
  inversion: Inversiones;

  @OneToMany(() => Fuentes, fuente => fuente.prestamo)
  fuentes: Fuentes[];
}
