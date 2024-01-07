import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AbonosModule } from './abonos/abonos.module';
import { ClientesModule } from './clientes/clientes.module';
import { PrestamosModule } from './prestamos/prestamos.module';
import { SetupModule } from './setup/setup.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetupService } from './setup/setup.service';
import { InversionistaModule } from './inversionista/inversionista.module';
import { InversionesModule } from './inversiones/inversiones.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
    useClass: SetupService
  }),
    AbonosModule,
    ClientesModule,
    PrestamosModule,
    SetupModule,
    InversionistaModule,
    InversionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
