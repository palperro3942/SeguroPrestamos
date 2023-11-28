import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Personas } from 'src/personas/personas.entity';
import { Prestamos } from 'src/prestamos/prestamos.entity';

@Entity()
export class Clientes extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  id_cliente: number;

  @Column({ type: 'int' })
  id_persona: number;

  @ManyToOne(() => Personas, persona => persona.clientes)
  @JoinColumn({ name: 'id_persona' })
  persona: Personas;

  @ManyToOne(() => Prestamos, prestamo => prestamo.cliente)
  @JoinColumn({ name: 'id_cliente' })
  prestamo: Prestamos;
}
