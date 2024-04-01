import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shared-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss'
})
export class SignUpFormComponent {

  @ViewChild('nameInput') nameInput!: string;
  @ViewChild('surnameInput') surnameInput!: string;
  @ViewChild('emailInput') emailInput!: string;
  @ViewChild('passwordInput') passwordInput!: string;
  @ViewChild('repeatPasswordInput') repeatPasswordInput!: string;
  @ViewChild('dayOption') dayOption!: number;
  @ViewChild('monthOption') monthOption!: string;
  @ViewChild('yearOption') yearOption!: number;

  currentYear: number = new Date().getFullYear();  

  days: number[] = Array.from({length: 31}, (_, i) => i + 1);
  months: string[] = [
    'Enero','Febrero','Marzo','Abril',
    'Mayo','Junio','Julio','Agosto',
    'Septiembre','Octubre','Noviembre','Diciembre'
  ];
  
  years: number[] = Array.from({length: 120}, (_, i) => this.currentYear - i);

  onSubmit(){

  }
}
