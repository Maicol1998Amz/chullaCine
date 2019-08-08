import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
//importar class Sala
import { Sala } from '../models/sala';
//Observable
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SalaService {
  private api_url = 'http://localhost:8001/';
  constructor(
    private http: HttpClient
  ) { }
    
  getAllSala() {
    return this.http.get(`${this.api_url}sala/`);
  }
  getSala(id: number) {
    return this.http.get(`${this.api_url}sala/${id}`);
  }
  getJoinPelicula(id: number) {
    return this.http.get(`${this.api_url}sala-pelicula/${id}`);
  }
  createSala(sala: Sala) {
    return this.http.post(`${this.api_url}sala`, sala);
  }
  updateSala(id:number, sala: Sala):Observable<Sala> {
    return this.http.put<Sala>(`${this.api_url}sala/${id}`, sala);
  }
  deleteSala(id: number) {
    return this.http.delete(`${this.api_url}sala/${id}`);
  }
}
