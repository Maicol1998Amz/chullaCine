import { Component, OnInit, HostBinding } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
//importar servicio
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //arreglos
  pelicula : any = [];
  constructor( 
    private peliculaService: PeliculaService,
    private router: Router) {  }
  @HostBinding('class') classes = 'row';
  ngOnInit() {
    this.peliculaService.getAllPelicula().subscribe(
      res => {
        this.pelicula = res;
      },
      err => console.log(err)
    )

  }

}
