import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'unab-admin-crear-imagen',
  templateUrl: './admin-crear-imagen.component.html',
  styleUrls: ['./admin-crear-imagen.component.css']
})
export class AdminCrearImagenComponent implements OnInit {

  constructor() { }
  
  crearImagen(imagen){
    console.log(imagen);
   }

  ngOnInit(): void {
  }

}
