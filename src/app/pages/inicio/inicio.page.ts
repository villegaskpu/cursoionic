import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'alert',
      redirectTo: '/alert'
    },
    {
      icon: 'american-football',
      name: 'action sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'person-circle-outline',
      name: 'avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Botones y router',
      redirectTo: '/botones'
    },
    {
      icon: 'card',
      name: 'Card',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Check',
      redirectTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'Datetime',
      redirectTo: '/date-time'
    },
    {
      icon: 'car',
      name: 'Fabs',
      redirectTo: '/fab'
    },
    {
      icon: 'grid',
      name: 'Grid - rows',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite',
      name: 'Infinite scroll',
      redirectTo: '/infinite-scroll'
    },
    {
      icon: 'hammer',
      name: 'Input - forms',
      redirectTo: '/input'
    },
    {
      icon: 'list',
      name: 'List - sliding',
      redirectTo: '/list'
    },
    {
      icon: 'reorder-three-outline',
      name: 'list - reorder',
      redirectTo: '/list-reorder'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
