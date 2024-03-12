import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { CommonModule } from '@angular/common';
import { EventScrollComponent } from './components/event-scroll/event-scroll.component';

@NgModule({    
    declarations: [LoginFormComponent, SignUpFormComponent, EventScrollComponent],
    exports:[LoginFormComponent, SignUpFormComponent, EventScrollComponent],
    imports:[CommonModule],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
