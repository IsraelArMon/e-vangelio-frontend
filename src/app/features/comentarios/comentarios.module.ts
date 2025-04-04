import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioFormComponent } from './comentario-form/comentario-form.component';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';



@NgModule({
  declarations: [
    ComentarioFormComponent,
    ComentarioListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComentariosModule { }
