import { ChangeDetectorRef, Component } from '@angular/core';

import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-shared-event-scroll',
  templateUrl: './event-scroll.component.html',
  styleUrl: './event-scroll.component.scss'
})
export class EventScrollComponent {

  public events: string [] = ['evento1','evento2','evento3','evento4','evento5','evento6','evento7','evento8','evento9','evento10'];  

}

