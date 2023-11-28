import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Prestamos } from 'src/prestamos/prestamos.entity';

@Entity()
export class Abonos extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'int' })
  id_prestamo: number;

  @Column({ type: 'decimal' })
  cantidad: number;

  @Column({ type: 'varchar' })
  metodo_entrada: string;

  @Column({ type: 'text' })
  comentario: string;

  // Relacion Prestamo-Abono
  @ManyToOne(() => Prestamos, prestamo => prestamo.abonos)
  @JoinColumn({name: 'id_prestamo'})
  prestamo: Prestamos[];
}
