import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importar Angular Forms
import { FormsModule } from '@angular/forms';
//Importar Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/user/registro/registro.component';
import { LoguinComponent } from './components/user/loguin/loguin.component';
import { ComprobarDatosComponent } from './components/compra/comprobar-datos/comprobar-datos.component';
import { MetodoPagoComponent } from './components/compra/metodo-pago/metodo-pago.component';
import { FacturaComponent } from './components/compra/factura/factura.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { Page404Component } from './components/page404/page404.component';
import { NoRegistradoComponent } from './components/navbar/no-registrado/no-registrado.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
// Servicios
import { AdministradorComponent } from './components/administrador/administrador.component';
import { HistorialCompraComponent } from './components/user/historial-compra/historial-compra.component';
import { PeliculaService } from './services/pelicula.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    LoguinComponent,
    ComprobarDatosComponent,
    MetodoPagoComponent,
    FacturaComponent,
    DetallePeliculaComponent,
    Page404Component,
    NoRegistradoComponent,
    AdministradorComponent,
    CarouselComponent,
    HistorialCompraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PeliculaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
