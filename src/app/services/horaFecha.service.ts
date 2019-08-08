import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Class HoraFecha
import { HoraFecha } from '../models/horaFecha';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoraFechaService {
  private api_url = 'http://localhost:8001/';
  constructor(
    private http: HttpClient
  ) { }
    
  getAllhoraFecha() {
    return this.http.get(`${this.api_url}horaFecha/`);
  }
  gethoraFecha(id: string) {
    return this.http.get(`${this.api_url}horaFecha/${id}`);
  }
  //Join
  gethoraFechaPelicula(id: string) {
    return this.http.get(`${this.api_url}horaFecha-pelicula/${id}`);
  }
  createhoraFecha(horaFecha: HoraFecha) {
    return this.http.post(`${this.api_url}horaFecha`, horaFecha);
  }
  updatehoraFecha(id:string, horaFecha: HoraFecha):Observable<HoraFecha> {
    return this.http.put<HoraFecha>(`${this.api_url}horaFecha/${id}`, horaFecha);
  }
  deletehoraFecha(id: string) {
    return this.http.delete(`${this.api_url}horaFecha/${id}`);
  }
}
