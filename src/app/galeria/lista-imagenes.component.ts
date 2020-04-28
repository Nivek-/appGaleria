import { Component, OnInit, InputDecorator } from "@angular/core";
import { Imagen } from "../models/imagen";
import { ImagenService } from "../services/imagen.service";

@Component({
  selector: "unab-lista-imagenes",
  templateUrl: "./lista-imagenes.component.html",
  styles: ["galeria.component.css"],
})
export class ListaImagenesComponent implements OnInit {
  imagenes: Imagen[] = [
    //   new Imagen('1','Imagen 01','Descripción de Imagen 01','https://natalia230.files.wordpress.com/2017/03/cropped-paisajes-bonitos-de-otoc3b1o-lago.jpg?w=200','https://natalia230.files.wordpress.com/2017/03/cropped-paisajes-bonitos-de-otoc3b1o-lago.jpg?w=200'),
    //   new Imagen('2','Imagen 02','Descripción de Imagen 02','https://static.vix.com/es/sites/default/files/styles/thumbnail/public/imj/p/paisajes-espectaculares-del-mundo-1.jpg','https://static.vix.com/es/sites/default/files/styles/thumbnail/public/imj/p/paisajes-espectaculares-del-mundo-1.jpg'),
    //   new Imagen('3','Imagen 03','Descripción de Imagen 03','https://i.pinimg.com/originals/3c/cb/ce/3ccbce2c3f3a7f241ae4bd29364511ec.jpg','https://i.pinimg.com/originals/3c/cb/ce/3ccbce2c3f3a7f241ae4bd29364511ec.jpg'),
    //   new Imagen('4','Imagen 04','Descripción de Imagen 04','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEHIVFzrauy48NdJKfLupGNHJGCSGFBPZiqXf_lLbBAVsLYikY&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEHIVFzrauy48NdJKfLupGNHJGCSGFBPZiqXf_lLbBAVsLYikY&usqp=CAU'),
    //   new Imagen('5','Imagen 05','Descripción de Imagen 05','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzlKwIa8bgCj6vnBXAtKYQSuceOyAfOJlRSuVqCeK8exg84dAs&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzlKwIa8bgCj6vnBXAtKYQSuceOyAfOJlRSuVqCeK8exg84dAs&usqp=CAU'),
    //   new Imagen('6','Imagen 06','Descripción de Imagen 06','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5iVp-3tpT6L84sCnFzYaRN_rxyXqonria0BVVyiGsIN8FkCcq&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5iVp-3tpT6L84sCnFzYaRN_rxyXqonria0BVVyiGsIN8FkCcq&usqp=CAU'),
    //   new Imagen('7','Imagen 07','Descripción de Imagen 07','https://i2.wp.com/elasombrario.com/wp-content/uploads/sites/1/2014/01/paisaje-6.jpg?resize=200%2C200&ssl=1','https://i2.wp.com/elasombrario.com/wp-content/uploads/sites/1/2014/01/paisaje-6.jpg?resize=200%2C200&ssl=1'),
    //   new Imagen('8','Imagen 08','Descripción de Imagen 08','https://static.vecteezy.com/system/resources/thumbnails/000/181/746/small/abstract-forest.jpg','https://static.vecteezy.com/system/resources/thumbnails/000/181/746/small/abstract-forest.jpg')
  ];
  selectedImagen: Imagen;
  
  // imagen = new Imagen('1','Imagen 01','Descripción de Imagen 01','https://natalia230.files.wordpress.com/2017/03/cropped-paisajes-bonitos-de-otoc3b1o-lago.jpg?w=200','https://natalia230.files.wordpress.com/2017/03/cropped-paisajes-bonitos-de-otoc3b1o-lago.jpg?w=200');
  constructor(private imagenService: ImagenService) {}

  ngOnInit() {
    this.imagenes = this.imagenService.getImagenes();
  }

  ngOnSelect(imagen : Imagen) {
    this.selectedImagen = imagen;
  }
}
