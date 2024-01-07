// inversionista.entity.ts
import { GenericEntity } from 'src/generic/generic.entity';
import { Inversiones } from 'src/inversiones/inversiones.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

@Entity()
export class Inversionista extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nombre: string;

  @Column({ type: 'varchar' })
  apellido: string;

  @Column({ type: 'varchar' })
  telefono: string;

  @Column({ type: 'varchar' })
  direccion: string;

  // Relación Inversionista-Inversiones
  @OneToMany(() => Inversiones, inversion => inversion.inversionista)
  inversiones: Inversiones[];
}
