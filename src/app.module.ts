import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AbonosModule } from './abonos/abonos.module';
import { ClientesModule } from './clientes/clientes.module';
import { DireccionesModule } from './direcciones/direcciones.module';
import { FuentesModule } from './fuentes/fuentes.module';
import { PersonasModule } from './personas/personas.module';
import { PrestamosModule } from './prestamos/prestamos.module';
import { SetupModule } from './setup/setup.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetupService } from './setup/setup.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
    useClass: SetupService
  }),
    AbonosModule,
    ClientesModule,
    DireccionesModule,
    FuentesModule,
    PersonasModule,
    PrestamosModule,
    SetupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
