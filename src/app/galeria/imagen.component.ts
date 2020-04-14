import { Component, OnInit, Input } from "@angular/core";
import { Imagen } from "../models/imagen";

@Component({
  selector: "unab-imagen",
  templateUrl: "./imagen.component.html",
  styles: [
    `
      img {
        /* Rodea de un borde sombreado 
       offset-x | offset-y | blur-radius | spread-radius | color  */
        -webkit-box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0, 75);
        -moz-box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0, 75);
        box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0, 75);

        /* Asigna un margen inferior de 20px */
        margin-bottom: 20px;
        opacity: 0.5;
      }

      /* Cuando el raton se encuentre sobre el elemento se aplicará el siguiente estilo: */
      img:hover {
        /* Añade un filtro en escala de grises*/
        -webkit-filter: grayscale(1);
        opacity: 1;
      }
    `,
  ],
})
export class ImagenComponent implements OnInit {
  @Input() imagen: Imagen;
  constructor() {}

  ngOnInit(): void {}
}
