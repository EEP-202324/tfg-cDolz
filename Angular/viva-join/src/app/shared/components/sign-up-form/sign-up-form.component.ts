import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss',
  // TODO changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpFormComponent {

  // cojo el año actual
  currentYear: number = new Date().getFullYear();

  days: number[] = Array.from({length: 31}, (_, i) => i + 1);
  months: string[] = [
    'Enero','Febrero','Marzo','Abril',
    'Mayo','Junio','Julio','Agosto',
    'Septiembre','Octubre','Noviembre','Diciembre'
  ];
  
  years: number[] = Array.from({length: 120}, (_, i) => this.currentYear - i);
}
