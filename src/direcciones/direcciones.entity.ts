import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Personas } from 'src/personas/personas.entity';

@Entity()
export class Direcciones {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  calle: string;

  @Column({ type: 'varchar' })
  numero: string;

  @Column({ type: 'varchar' })
  colonia: string;

  @Column({ type: 'int' })
  codigo_postal: number;

  @Column({ type: 'varchar' })
  ciudad: string;

  @Column({ type: 'varchar' })
  estado: string;

  @Column({ type: 'varchar' })
  pais: string;

  @OneToOne(() => Personas, persona => persona.direccion)
  persona: Personas;
}
