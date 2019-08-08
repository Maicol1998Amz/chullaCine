import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoRegistradoComponent } from './components/navbar/no-registrado/no-registrado.component';
import { ComprobarDatosComponent } from './components/compra/comprobar-datos/comprobar-datos.component';
import { FacturaComponent } from './components/compra/factura/factura.component';
import { MetodoPagoComponent } from './components/compra/metodo-pago/metodo-pago.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { LoguinComponent } from './components/user/loguin/loguin.component';
import { RegistroComponent } from './components/user/registro/registro.component';
import { Page404Component } from './components/page404/page404.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { CarouselComponent } from'./components/home/carousel/carousel.component'
import { HistorialCompraComponent } from './components/user/historial-compra/historial-compra.component';

const routes: Routes = [
  //direcciones
  { path:'historial-compra', component:HistorialCompraComponent },
  { path:'administrador', component:AdministradorComponent },
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'home', component:CarouselComponent },
  { path:'no-registrado', component:NoRegistradoComponent },
  { path:'comprobar-datos', component:ComprobarDatosComponent },
  { path:'factura', component:FacturaComponent },
  { path:'metodo-pago', component:MetodoPagoComponent },
  { path:'detalle/pelicula/:id', component:DetallePeliculaComponent },
  { path:'loguin', component:LoguinComponent },
  { path:'registro', component:RegistroComponent },
  { path:'**', component:Page404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
