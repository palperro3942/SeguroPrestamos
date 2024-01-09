// inversiones.entity.ts
import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Inversionista } from 'src/inversionista/inversionista.entity';
import { Prestamos } from 'src/prestamos/prestamos.entity';

@Entity()
export class Inversiones extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', unique: true })
  folio: number;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'decimal' })
  cantidad: number; // Cantidad total invertida

  @Column({ type: 'decimal' })
  cantidad_disponible: number; // Cantidad disponible para préstamos

  @Column({ type: 'varchar' })
  metodo_ingreso: string; // Puedes cambiar a un tipo de enumeración si es más adecuado

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  porcentaje_interes: number;

  @Column({ type: 'int' })
  id_inversionista: number;

  // Relación Inversionista-Inversion
  @ManyToOne(() => Inversionista, inversionista => inversionista.inversiones)
  @JoinColumn({ name: 'id_inversionista' })
  inversionista: Inversionista;

}
