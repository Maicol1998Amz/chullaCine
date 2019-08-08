import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Class Facturacion
import { Facturacion } from '../models/facturacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {
  private api_url = 'http://localhost:8001/';
  constructor(
    private http: HttpClient
  ) { }
    
  getAllFacturacion() {
    return this.http.get(`${this.api_url}facturacion/`);
  }
  getFacturacion(id: string) {
    return this.http.get(`${this.api_url}facturacion/${id}`);
  }
  createFacturacion(facturacion: Facturacion) {
    return this.http.post(`${this.api_url}facturacion`, facturacion);
  }
  updateFacturacion(id:string, facturacion: Facturacion):Observable<Facturacion> {
    return this.http.put<Facturacion>(`${this.api_url}facturacion/${id}`, facturacion);
  }
  deleteFacturacion(id: string) {
    return this.http.delete(`${this.api_url}facturacion/${id}`);
  }
}
