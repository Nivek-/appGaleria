import { Component, OnInit } from '@angular/core';
import { ImagenService } from '../services/imagen.service';
import { Imagen } from '../models/imagen';
import { Observable } from 'rxjs';

@Component({
  selector: 'unab-admin-lista-imagenes',
  templateUrl: './admin-lista-imagenes.component.html',
  styleUrls: ['./admin-lista-imagenes.component.css']
})
export class AdminListaImagenesComponent implements OnInit {
  imagenes: Observable<Imagen[]>;
  constructor(private imagenservice:ImagenService){}


  ngOnInit(): void {
    this.imagenes = this.imagenservice.getImagenes();
  }

}
