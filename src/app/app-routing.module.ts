import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreyenteFormComponent } from './features/creyentes/creyente-form/creyente-form.component';
import { CreyenteListComponent } from './features/creyentes/creyente-list/creyente-list.component';
import { PublicacionFormComponent } from './features/publicaciones/publicacion-form/publicacion-form.component';
import { PublicacionListComponent } from './features/publicaciones/publicacion-list/publicacion-list.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'creyentes/registro', component: CreyenteFormComponent },
  { path: 'creyentes', component: CreyenteListComponent },
  { path: 'publicaciones/nueva', component: PublicacionFormComponent },
  { path: 'publicaciones', component: PublicacionListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
