import { NgModule } from '@angular/core';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { CommonModule } from '@angular/common';

@NgModule({    
    declarations: [LoginFormComponent, SignUpFormComponent],
    exports:[LoginFormComponent, SignUpFormComponent],
    imports:[CommonModule]
})
export class SharedModule { }
