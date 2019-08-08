import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//importar Http
import { HttpClient } from '@angular/common/http';
//importar class Asiento
import { Asiento } from '../models/asiento';

@Injectable({
  providedIn: 'root'
})
export class AsientoService {
  private api = 'http://localhost:8001/';
  constructor(
    private http: HttpClient
  ) { }
    
  getAllAsiento() {
    return this.http.get(`${this.api}asiento/`);
  }
  getOneAsiento(id: string) {
    return this.http.get(`${this.api}asiento/${id}`);
  }
  createAsiento(asiento: Asiento) {
    return this.http.post(`${this.api}asiento`, asiento);
  }
  updateAsiento(id:string, asiento: Asiento):Observable<Asiento> {
    return this.http.put<Asiento>(`${this.api}asiento/${id}`, asiento);
  }
  deleteAsiento(id: string) {
    return this.http.delete(`${this.api}asiento/${id}`);
  }
}
