import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ImagenService } from "./services/imagen.service";
import { HttpClientModule } from '@angular/common/http';

import { routes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenusuperiorComponent } from "./menusuperior.component";
import { GaleriaComponent } from "./galeria/galeria.component";
import { ListaImagenesComponent } from "./galeria/lista-imagenes.component";
import { ImagenComponent } from "./galeria/imagen.component";
import { DetalleImagenComponent } from "./galeria/detalle-imagen.component";
import { ContactoComponent } from "./galeria/contacto.component";
import { AcercadeComponent } from "./galeria/acercade.component";
import { AdminComponent } from './admin/admin.component';
import { AdminListaImagenesComponent } from './admin/admin-lista-imagenes.component';
import { DashboardComponent } from './admin/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AdminCrearImagenComponent } from './admin/admin-crear-imagen.component';


// import { Routes, RouterModule } from "@angular/router";
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
    AdminComponent,
    AdminListaImagenesComponent,
    DashboardComponent,
    AdminCrearImagenComponent,
  ],
  imports: [
    // RouterModule.forRoot(appRoutes)
    HttpClientModule,
    routes,
    BrowserModule,
    FormsModule
  ],
  providers: [ImagenService],
  bootstrap: [AppComponent],
})
export class AppModule {}
