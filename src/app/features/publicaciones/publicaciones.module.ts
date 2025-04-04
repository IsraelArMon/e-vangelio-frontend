import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionFormComponent } from './publicacion-form/publicacion-form.component';
import { PublicacionListComponent } from './publicacion-list/publicacion-list.component';



@NgModule({
  declarations: [
    PublicacionFormComponent,
    PublicacionListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicacionesModule { }
