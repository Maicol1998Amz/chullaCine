import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//importar Http
import { HttpClient } from '@angular/common/http';
//importar class Cliente
import { Cliente } from '../models/cliente';
//importar class User Logueo
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private api = 'http://localhost:8001/';
  constructor(
    private http: HttpClient
  ) { }
    
  getAllCliente() {
    return this.http.get(`${this.api}cliente/`);
  }
  getLoguinCliente(id: string) {
    return this.http.get(`${this.api}cliente/${id}`);
  }
  //Loguin
  /*getCliente(id: string) {
    return this.http.get(`${this.api}cliente/${id}`);
  }*/
  createCliente(cliente: Cliente) {
    return this.http.post(`${this.api}cliente`, cliente);
  }
  updateCliente(id:string, cliente: Cliente):Observable<Cliente> {
    return this.http.put<Cliente>(`${this.api}cliente/${id}`, cliente);
  }
  deleteCliente(id: string) {
    return this.http.delete(`${this.api}cliente/${id}`);
  }
}
