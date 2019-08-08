import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//importar models
import { Actor } from '../models/actor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private api = 'http://localhost:8001/';
  constructor(
    private http: HttpClient
  ) { }
    
  getAllActor() {
    return this.http.get(`${this.api}actor/`);
  }
  getActor(id: string) {
    return this.http.get(`${this.api}actor/${id}`);
  }
  //Inner Join
  getJoin(id: string) {
    return this.http.get(`${this.api}actor-pelicula/${id}`);
  }
  createActor(actor: Actor) {
    return this.http.post(`${this.api}actor`, actor);
  }
  updateActor(id:string, actor: Actor):Observable<Actor> {
    return this.http.put<Actor>(`${this.api}actor/${id}`, actor);
  }
  deleteActor(id: string) {
    return this.http.delete(`${this.api}actor/${id}`);
  }
}
