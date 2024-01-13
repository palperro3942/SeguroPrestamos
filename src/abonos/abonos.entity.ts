import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Prestamos } from 'src/prestamos/prestamos.entity';
import { Clientes } from 'src/clientes/clientes.entity';

@Entity()
export class Abonos extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'int' })
  id_prestamo: number;

  @Column({ type: 'float' })
  cantidad: number;

  @Column({ type: 'varchar' })
  metodo_entrada: string;

  @Column({ type: 'text', nullable: true })
  comentario: string;

  // Relacion Prestamo-Abono
  @ManyToOne(() => Prestamos, prestamo => prestamo.abonos)
  @JoinColumn({name: 'id_prestamo'})
  prestamo: Prestamos[];

  @ManyToOne(() => Clientes, cliente => cliente.abono)
  @JoinColumn({name: 'id_cliente'})
  cliente: Clientes;
}
