import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Class FormatoPelicula
import { FormatoVideo } from '../models/formatoVideo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FomatoVideoService {
  private api_url = 'http://localhost:8001/';
  constructor(
    private http: HttpClient
  ) { }
    
  getAllFormatoVideo() {
    return this.http.get(`${this.api_url}formatoVideo/`);
  }
  getFormatoVideo(id: string) {
    return this.http.get(`${this.api_url}formatoVideo/${id}`);
  }
  createFormatoVideo(formatoVideo: FormatoVideo) {
    return this.http.post(`${this.api_url}formatoVideo`, formatoVideo);
  }
  updateFormatoVideo(id:string, formatoVideo: FormatoVideo):Observable<FormatoVideo> {
    return this.http.put<FormatoVideo>(`${this.api_url}formatoVideo/${id}`, formatoVideo);
  }
  deleteFormatoVideo(id: string) {
    return this.http.delete(`${this.api_url}formatoVideo/${id}`);
  }
}
