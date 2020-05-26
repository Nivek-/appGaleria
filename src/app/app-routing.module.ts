import { NgModule, ModuleWithProviders } from "@angular/core";

import { GaleriaComponent } from "./galeria/galeria.component";
import { ContactoComponent } from "./galeria/contacto.component";
import { AcercadeComponent } from "./galeria/acercade.component";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { adminRoutes } from "./admin/admin.routes";

const appRoutes: Routes = [
  { path: "", redirectTo: "/galeria", pathMatch: "full" },
  { path: "galeria", component: GaleriaComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "acercade", component: AcercadeComponent },
  { path: "admin", component: AdminComponent, children: adminRoutes },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
