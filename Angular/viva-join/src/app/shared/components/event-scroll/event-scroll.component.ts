import { AfterViewInit, Component, ElementRef, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-shared-event-scroll',
  templateUrl: './event-scroll.component.html',
  styleUrl: './event-scroll.component.scss'
})
export class EventScrollComponent {

  public events: string[] = ['evento1', 'evento2', 'evento3', 'evento4', 'evento5', 'evento6', 'evento7', 'evento8', 'evento9',
    'evento10', 'evento11', 'evento12', 'evento13', 'evento14', 'evento15'];

  @ViewChildren('divSwiper') previousSwiperList!: QueryList<ElementRef>;

  @ViewChildren('slideImg') previousImgList!: QueryList<ElementRef>;

  movePreviousSliders(actualIndex: number) {    
    this.previousSwiperList.forEach((element: ElementRef, index: number) => {
      if(index < actualIndex){
        element.nativeElement.style.transform = 'translateX(-9%)';        
      }
      if(index > actualIndex){
        element.nativeElement.style.transform = 'translateX(9%)';        
      }
    });
    this.previousImgList.forEach((element: ElementRef, index: number) => {
      if(index != actualIndex){
        element.nativeElement.style.opacity = 0.5;        
      }
    });
  }

  resetPreviousSliders(actualIndex: number) {
    console.log(actualIndex);
    this.previousSwiperList.forEach((element: ElementRef, index: number) => {
      if(index != actualIndex){
        element.nativeElement.style.transform = 'translateX(0%)';
      }
    });
    this.previousImgList.forEach((element: ElementRef, index: number) => {
      if(index != actualIndex){
        element.nativeElement.style.opacity = 1;
      } 
    });
  }

}
