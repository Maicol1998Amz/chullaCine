import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
//importar class Pelicula
import { Pelicula } from '../models/pelicula';
//Observable
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeliculaService {
  private api_url = 'http://localhost:8001/';
  constructor(
    private http: HttpClient
  ) { }
    
  getAllPelicula() {
    return this.http.get(`${this.api_url}pelicula/`);
  }
  getPelicula(id: number) {
    return this.http.get(`${this.api_url}pelicula/${id}`);
  }
  getJoinPrecio(id: number) {
    return this.http.get(`${this.api_url}pelicula-precio/${id}`);
  }
  getJoinHoraFecha(id: number) {
    return this.http.get(`${this.api_url}pelicula-horaFecha/${id}`);
  }
  createPelicula(pelicula: Pelicula) {
    return this.http.post(`${this.api_url}pelicula`, pelicula);
  }
  updatePelicula(id:number, pelicula: Pelicula):Observable<Pelicula> {
    return this.http.put<Pelicula>(`${this.api_url}pelicula/${id}`, pelicula);
  }
  deletePelicula(id: number) {
    return this.http.delete(`${this.api_url}pelicula/${id}`);
  }
}
