import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventScrollComponent } from './components/event-scroll/event-scroll.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({    
    declarations: [LoginFormComponent, SignUpFormComponent, EventScrollComponent],
    exports:[LoginFormComponent, SignUpFormComponent, EventScrollComponent, SwiperModule],
    imports:[CommonModule, SwiperModule]
})
export class SharedModule { }
