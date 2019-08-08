import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Class Genero
import { GeneroPelicula } from '../models/generoPelicula';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private api_url = 'http://localhost:8001/';
  constructor(
    private http: HttpClient
  ) { }
    
  getAllGenero() {
    return this.http.get(`${this.api_url}genero/`);
  }
  getGenero(id: number) {
    return this.http.get(`${this.api_url}genero/${id}`);
  }
  createGenero(genero: GeneroPelicula) {
    return this.http.post(`${this.api_url}genero`, genero);
  }
  updateGenero(id:string, genero: GeneroPelicula):Observable<GeneroPelicula> {
    return this.http.put<GeneroPelicula>(`${this.api_url}genero/${id}`, genero);
  }
  deleteGenero(id: string) {
    return this.http.delete(`${this.api_url}genero/${id}`);
  }
}
