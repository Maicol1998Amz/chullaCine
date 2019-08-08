import { Component, OnInit, HostBinding } from '@angular/core';
//importar modelo
import { User } from 'src/app/models/user';
//Importar servicio
import { ClienteService } from 'src/app/services/cliente.service';
@Component({
  selector: 'app-no-registrado',
  templateUrl: './no-registrado.component.html',
  styleUrls: ['./no-registrado.component.css']
})
export class NoRegistradoComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  user : User ={
    usuario:'',
    contrasena:''
  }
  clienteArray: any=[];
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getAllCliente().subscribe(
      res =>{
        this.clienteArray = res;
      },
      err => console.log(err)
    );
  }
  onLoguin(){
    return this.clienteService.getAllCliente()
  } 
}

