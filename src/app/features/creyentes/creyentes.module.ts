import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { CreyenteFormComponent } from './creyente-form/creyente-form.component';
import { CreyenteListComponent } from './creyente-list/creyente-list.component';



@NgModule({
  declarations: [
    CreyenteFormComponent,
    CreyenteListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule, 
    MatCardModule
  ],
  exports: [CreyenteFormComponent]
})
export class CreyentesModule { }
