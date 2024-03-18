import { Component, ElementRef } from '@angular/core';
import SwiperCore, { Navigation, Swiper } from 'swiper';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-shared-event-scroll',
  templateUrl: './event-scroll.component.html',
  styleUrl: './event-scroll.component.scss'
})
export class EventScrollComponent {  

  public events: string[] = ['evento1', 'evento2', 'evento3', 'evento4', 'evento5', 'evento6', 'evento7', 'evento8', 'evento9',
    'evento10', 'evento11', 'evento12', 'evento13', 'evento14', 'evento15']; 
  
}
