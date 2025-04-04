import { Component } from '@angular/core';

interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  image: string;
  route: string;
  color: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  features: FeatureCard[] = [
    {
      title: 'Creyentes',
      description: 'Regístrate y forma parte de nuestra comunidad',
      icon: 'group',
      image: 'assets/images/cross.jpg',
      route: '/creyentes/registro',
      color: 'primary'
    },
    {
      title: 'Publicaciones',
      description: 'Inspírate con mensajes de fe',
      icon: 'book',
      image: 'assets/images/bible.jpg',
      route: '/publicaciones',
      color: 'accent'
    },
    {
      title: 'Comentarios',
      description: 'Comparte tus reflexiones',
      icon: 'forum',
      image: 'assets/images/prayer.jpg',
      route: '/comentarios',
      color: 'warn'
    }
  ];
}