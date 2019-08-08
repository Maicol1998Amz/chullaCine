import { Component, OnInit} from '@angular/core';
//importar modelo
import { Cliente } from 'src/app/models/cliente';
//Importar servicio
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  cliente: Cliente={
    cedula: '',
    nombre: '',
    apellido: '',
    email: '',
    contrasena: ''
  } 
  
  constructor(private clienteService: ClienteService) { }

  ngOnInit() { 
    
  }
  createCliente(){
    delete this.cliente.id
    this.clienteService.createCliente(this.cliente)
    .subscribe(
      res =>{console.log(res)},
      err => console.error(err)
    )
  }
}
