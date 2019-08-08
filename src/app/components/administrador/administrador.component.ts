import { Component, OnInit, HostBinding } from '@angular/core';
//Importar class
import { Pelicula } from 'src/app/models/pelicula';
import { GeneroPelicula } from 'src/app/models/generoPelicula';
import { Sala } from 'src/app/models/sala';
import { Precio } from 'src/app/models/precio';
import { HoraFecha } from 'src/app/models/horaFecha';
import { PeliculaAdministrador } from 'src/app/models/peliculaAdministrador';
import { FormatoVideo } from 'src/app/models/formatoVideo';
//Importar Servicio
import { PeliculaService } from 'src/app/services/pelicula.service';
import { GeneroService } from 'src/app/services/genero.service';
import { SalaService } from 'src/app/services/sala.service';
import { HoraFechaService } from 'src/app/services/horaFecha.service';
import { ReservaAsientoService } from 'src/app/services/reservaAsiento.service';
import { FomatoVideoService } from 'src/app/services/formatoVideo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  //arreglos
  peli: any = [];
  sala: any = [];
  genero: any = [];
  horaFecha: any = [];
  peliculaAdministrador: any = [];
  precioAdministrador: any = [];
  horaFechaAdministrador: any = [];
  reservaAdministrador: any = [];
  formatoVideo: any = [];
  //mapeo
  generos: GeneroPelicula = {
    id: 0,
    nombre: ''
  }
  pelicula: Pelicula = {
    titulo: '',
    duracion: '',
    imagen: '',
    idGenero: 0,
    idAdmin: 1,
    idHoraFecha: 0,
    idFormatoVideo: 0
  }
  salas: Sala = {
    codigo: 1,
    nombre:'alfa',
    idPelicula: 0,
  }
  precios: Precio = {
    cantidad: 0,
  }
  horasFechas: HoraFecha = {
    fecha: '',
    hora: ''
  }
  peliculasAdmin: PeliculaAdministrador = {
    id: '',
    titulo: '',
    sala: 'alfa',
    horaFecha: '',
    asientoDisponible: '',
    precio: 0
  }
  formatosVideos: FormatoVideo = {
    nombre: ''
  }

  constructor(
    private peliculaService: PeliculaService,
    private generoService: GeneroService,
    private salaService: SalaService,
    private horaFechaService: HoraFechaService,
    private reservaAsientoService: ReservaAsientoService,
    private formatoVideoService: FomatoVideoService,
    private router : Router) { }

  ngOnInit() {
    this.generoService.getAllGenero().subscribe(
      res => {
        this.genero = res;
      },
      err => console.log(err)
    )
    this.peliculaService.getAllPelicula().subscribe(
      res => {
        this.peli = res;
      },
      err => console.log(err)
    )
    this.salaService.getAllSala().subscribe(
      res => {
        this.sala = res;
      },
      err => console.log(err)
    )
    this.horaFechaService.getAllhoraFecha().subscribe(
      res => {
        this.horaFecha = res;
      },
      err => console.log(err)
    )
    this.formatoVideoService.getAllFormatoVideo().subscribe(
      res => {
        this.formatoVideo = res;
        this.formatoVideo = res;
      },
      err => console.log(err)
    )
  }

  getAllPelicula() {
    this.peliculaService.getAllPelicula()
      .subscribe(pelicula => {
        console.log(pelicula);
      })
  }
  getJoinPelicula(pelicula: Pelicula) {
    this.salaService.getJoinPelicula(pelicula.id)
      .subscribe(
        res => {
          this.peliculaAdministrador = res;
        },
        err => console.log(err)
      );
    this.peliculaService.getJoinHoraFecha(pelicula.id)
      .subscribe(
        res => {
          this.horaFechaAdministrador = res;
        },
        err => console.log(err)
      );
    this.peliculaService.getJoinPrecio(pelicula.id)
      .subscribe(
        res => {
          this.precioAdministrador = res;
        },
        err => console.log(err)
      );
    this.reservaAsientoService.getPeliculaReservaAsiento(pelicula.id)
      .subscribe(
        res => {
          this.reservaAdministrador = res;
        },
        err => console.log(err)
      );
  }

  createPelicula() {
    this.pelicula.idGenero = this.generos.id;
    this.pelicula.idHoraFecha = this.horasFechas.id;
    this.pelicula.idFormatoVideo = this.horasFechas.id;
    this.peliculaService.createPelicula(this.pelicula)
          .subscribe(
            res => { console.log(res) },
            err => console.error(err)
          )
    this.pelicula = new Pelicula();
    this.generos = new GeneroPelicula();
    this.horasFechas = new HoraFecha();
  }

  updatePelicula(id:number) {
    this.pelicula.idGenero = this.generos.id;
    this.pelicula.idHoraFecha = this.horasFechas.id;
    this.pelicula.idFormatoVideo = this.horasFechas.id;
    this.peliculaService.updatePelicula(id, this.pelicula)
    .subscribe(
      res => { console.log(res) 
        this.getAllPelicula()},
        err => console.error(err)
    );
    console.log(this.pelicula)
    this.pelicula = new Pelicula();
    this.generos = new GeneroPelicula();
    this.horasFechas = new HoraFecha();
  }
  deletePelicula(id: number) {
    this.peliculaService.deletePelicula(id)
      .subscribe((data) => {
        console.log(data);
      })
      console.log(id)
  }
}
