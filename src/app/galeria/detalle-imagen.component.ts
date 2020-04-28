import { Component, OnInit, Input } from "@angular/core";
import { Imagen } from "../models/imagen";

@Component({
  selector: "unab-detalle-imagen",
  templateUrl: "./detalle-imagen.component.html",
  styles: [],
})
export class DetalleImagenComponent implements OnInit {
  @Input() selectedImagen: Imagen;
  constructor() {}

  ngOnInit(): void {}
}
