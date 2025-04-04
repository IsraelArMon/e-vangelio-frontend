import { Component } from '@angular/core';
import { Creyente } from '../../../core/models/creyente';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-creyente-form',
  standalone: false,
  templateUrl: './creyente-form.component.html',
  styleUrl: './creyente-form.component.scss'
})
export class CreyenteFormComponent {
  creyente: Creyente = {
    usuario: '',
    nombre: '',
    email: '',
    password: '',
    apellidos: '',
    telefono: '',
    pais: '',
    lenguaje: '',
    religion: ''
  };

  constructor(private apiService: ApiService){}

  onSubmit(): void {
    this.apiService.registrarCreyentes(this.creyente).subscribe(
      response => {
        console.log('creyente registrado', response);
      },
      error => {
        console.error('Error al registrar', error);
      }
    )
  }

}
