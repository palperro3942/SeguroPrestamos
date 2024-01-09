import { IsDate, IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RealizarPrestamoDto {
  @IsNotEmpty()
  @IsDate()
  fecha: Date;

  @IsNotEmpty()
  @IsInt()
  id_inversion: number;

  @IsNotEmpty()
  @IsInt()
  id_cliente: number;

  @IsNotEmpty()
  @IsNumber()
  cantidad: number;

  @IsNotEmpty()
  @IsNumber()
  interes: number;

  @IsNotEmpty()
  @IsString()
  metodo_salida: string;

  @IsNotEmpty()
  @IsString()
  origen_fuente: string;

  @IsNotEmpty()
  @IsString()
  garantia: string;
}