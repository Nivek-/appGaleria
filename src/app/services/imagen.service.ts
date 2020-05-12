import { Injectable } from "@angular/core";
import { Imagen } from "../models/imagen";

import{Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable({
  providedIn: "root",
})
export class ImagenService {

  constructor(private http:Http ) {}

  getImagenes(): Observable<Imagen[]>{
    return this.http.get('http://laravel.test/api/v1/imagenes').map((response: Response) =>
    response.json());
    }
    
}
