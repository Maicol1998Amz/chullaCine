import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
//importar class ReservaAsiento
import { ReservaAsiento } from '../models/reservaAsiento';
//Observable
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReservaAsientoService {
  private api_url = 'http://localhost:8001/';
  constructor(
    private http: HttpClient
  ) { }
    
  getAllReservaAsiento() {
    return this.http.get(`${this.api_url}reservaAsiento/`);
  }
  getReservaAsiento(id: number) {
    return this.http.get(`${this.api_url}reservaAsiento/${id}`);
  }
  //Join ReservaAsiento
  getPeliculaReservaAsiento(id: number) {
    return this.http.get(`${this.api_url}reservaAsiento-pelicula/${id}`);
  }
  createreservaAsiento(reservaAsiento: ReservaAsiento) {
    return this.http.post(`${this.api_url}reservaAsiento`, reservaAsiento);
  }
  updateReservaAsiento(id:number, reservaAsiento: ReservaAsiento):Observable<ReservaAsiento> {
    return this.http.put<ReservaAsiento>(`${this.api_url}reservaAsiento/${id}`, reservaAsiento);
  }
  deleteReservaAsiento(id: number) {
    return this.http.delete(`${this.api_url}reservaAsiento/${id}`);
  }
}
