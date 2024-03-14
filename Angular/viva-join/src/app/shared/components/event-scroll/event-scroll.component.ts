import { Component } from '@angular/core';
import Swiper from 'swiper';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-shared-event-scroll',
  templateUrl: './event-scroll.component.html',
  styleUrl: './event-scroll.component.scss'
})
export class EventScrollComponent {

  slide(event: Event) {
    const target = event.target;
    if (target instanceof Swiper) { // Comprobación de tipo
      const swiper = target as Swiper; // Conversión de tipo
      console.log('Swiper reachBeginning:', swiper);
      // Aquí puedes ejecutar cualquier lógica que desees cuando el swiper alcance su posición inicial
    } else {
      console.log('El objetivo del evento no es un objeto Swiper');
    }
  }

  public events: string[] = ['evento1', 'evento2', 'evento3', 'evento4', 'evento5', 'evento6', 'evento7', 'evento8', 'evento9', 'evento10'];

}

