import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AbonarPrestamoDto {
  @IsNotEmpty()
  @IsNumber()
  cantidad: number;

  @IsNotEmpty()
  @IsNumber()
  idPrestamo: number;

  @IsNotEmpty()
  @IsString()
  metodo_entrada: string;

  @IsNotEmpty()
  @IsString()
  comentario: string;
}