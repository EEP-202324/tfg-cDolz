import { Component } from '@angular/core';

import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-shared-event-scroll',
  templateUrl: './event-scroll.component.html',
  styleUrl: './event-scroll.component.scss'
})
export class EventScrollComponent {

  public events: string [] = ['evento','evento','evento','evento','evento','evento','evento','evento','evento','evento'];
}
