import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ImagenService } from "./services/imagen.service";
import { HttpModule } from "@angular/http";

import { routes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenusuperiorComponent } from "./menusuperior.component";
import { GaleriaComponent } from "./galeria/galeria.component";
import { ListaImagenesComponent } from "./galeria/lista-imagenes.component";
import { ImagenComponent } from "./galeria/imagen.component";
import { DetalleImagenComponent } from "./galeria/detalle-imagen.component";
import { ContactoComponent } from "./galeria/contacto.component";
import { AcercadeComponent } from "./galeria/acercade.component";
// import { Routes, RouterModule } from "@angular/router";
import {  } from "./app-routing.module";
// const appRoutes: Routes = [
//   { path: "", redirectTo: "/galeria", pathMatch: "full" },
//   { path: "galeria", component: GaleriaComponent },
//   { path: "contacto", component: ContactoComponent },
//   { path: "acercade", component: AcercadeComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    MenusuperiorComponent,
    GaleriaComponent,
    ListaImagenesComponent,
    ImagenComponent,
    DetalleImagenComponent,
    ContactoComponent,
    AcercadeComponent,
  ],
  imports: [
    // RouterModule.forRoot(appRoutes),
    routes,
    BrowserModule
  ],
  providers: [ImagenService],
  bootstrap: [AppComponent],
})
export class AppModule {}
