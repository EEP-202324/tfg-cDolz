import { NgModule } from '@angular/core';

import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({    
    declarations: [LoginFormComponent],
    exports:[LoginFormComponent]
})
export class SharedModule { }
