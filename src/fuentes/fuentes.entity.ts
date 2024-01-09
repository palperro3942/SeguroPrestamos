import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Prestamos } from 'src/prestamos/prestamos.entity';
import { Inversiones } from 'src/inversiones/inversiones.entity';

@Entity()
export class Fuentes extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  id_prestamo: number;

  @ManyToOne(() => Prestamos, prestamo => prestamo.fuentes)
  @JoinColumn({ name: 'id_prestamo' })
  prestamo: Prestamos;

  @ManyToOne(() => Inversiones, inversion => inversion.id)
  @JoinColumn({ name: 'id_inversion' })
  inversion: Inversiones;

  @Column({ type: 'decimal' })
  cantidad: number;
}
