import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { Personas } from 'src/personas/personas.entity';

@Entity()
export class Fuentes {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({ type: 'int' })
  id_persona: number;

  @Column({ type: 'decimal' })
  cantidad_invertida: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  porcentaje_ganancia: number;

  @ManyToOne(() => Personas, persona => persona.fuentes)
  @JoinColumn({ name: 'id_persona'})
  persona: Personas[];
}
