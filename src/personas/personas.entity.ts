import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Direcciones } from 'src/direcciones/direcciones.entity';
import { Clientes } from 'src/clientes/clientes.entity';
import { Fuentes } from 'src/fuentes/fuentes.entity';

@Entity()
export class Personas extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nombre: string;

  @Column({ type: 'varchar' })
  apellido: string;

  @Column({ type: 'varchar' })
  telefono: string;

  @Column({ type: 'int' })
  id_direccion: number;

  @Column({ type: 'int' })
  id_persona: number;

  @OneToOne(() => Direcciones, { eager: true })
  @JoinColumn({ name: 'id_direccion' })
  direccion: Direcciones;

  @OneToMany(() => Clientes, cliente => cliente.persona)
  clientes: Clientes[];

  @OneToMany(() => Fuentes, fuente => fuente.persona)
  @JoinColumn({ name: 'id_persona', referencedColumnName:'id_persona'})
  fuentes: Fuentes;
}
