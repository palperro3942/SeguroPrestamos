// clientes.entity.ts
import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Prestamos } from 'src/prestamos/prestamos.entity';
import { Abonos } from 'src/abonos/abonos.entity';

@Entity()
export class Clientes extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', unique: true })  // Haciendo la columna única
  id_cliente: number;

  @Column({ type: 'varchar' })
  nombre: string;

  @Column({ type: 'varchar' })
  apellido: string;

  @Column({ type: 'varchar' })
  telefono: string;

  @Column({ type: 'varchar' })
  direccion: string;

  @ManyToOne(() => Prestamos, prestamo => prestamo.cliente)
  prestamo: Prestamos[];

  @OneToMany(() => Abonos, abono => abono.cliente)
  abono: Abonos[];
}
