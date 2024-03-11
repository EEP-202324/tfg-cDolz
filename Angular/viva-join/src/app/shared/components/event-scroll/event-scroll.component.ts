import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-event-scroll',
  templateUrl: './event-scroll.component.html',
  styleUrl: './event-scroll.component.scss'
})
export class EventScrollComponent {
  public events: string [] = ['evento','evento','evento','evento','evento','evento','evento','evento','evento','evento'];
}
