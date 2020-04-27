import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ImagenService} from './services/imagen.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenusuperiorComponent } from './menusuperior.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ListaImagenesComponent } from './galeria/lista-imagenes.component';
import { ImagenComponent } from './galeria/imagen.component';

@NgModule({
  declarations: [
    AppComponent,
    MenusuperiorComponent,
    GaleriaComponent,
    ListaImagenesComponent,
    ImagenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImagenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
