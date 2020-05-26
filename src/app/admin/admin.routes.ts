import { Routes } from "@angular/router";
import { DashboardComponent } from './dashboard.component';
import { AdminListaImagenesComponent } from './admin-lista-imagenes.component';
import { AdminCrearImagenComponent } from './admin-crear-imagen.component';

export const adminRoutes: Routes = [
    { path: "", component: DashboardComponent },
    { path: 'imagenes', component: AdminListaImagenesComponent },
    { path: 'imagenes/crear', component: AdminCrearImagenComponent } 
  ]