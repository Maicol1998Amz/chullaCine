import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {
  pelicula : any = []
  constructor( 
    private activeRouter: ActivatedRoute,
    private peliculaService: PeliculaService,
     ) { }

  ngOnInit() {
    const params = this.activeRouter.snapshot.params;
    if(params.id){
      this.peliculaService.getPelicula(params.id)
      .subscribe(
        res =>{
          console.log(res)
          this.pelicula = res;
        },
        err => console.log(err)
      )
    }
  }

}
