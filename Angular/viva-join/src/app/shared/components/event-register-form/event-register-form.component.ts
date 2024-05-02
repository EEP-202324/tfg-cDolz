import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-shared-event-register-form',
  templateUrl: './event-register-form.component.html',
  styleUrl: './event-register-form.component.scss'
})
export class EventRegisterFormComponent implements OnDestroy {

  form!: FormGroup<any>;
  private unsubscribe$ = new Subject<void>();
  errorMessage!: string;
  selectedFile!: File;
  categories: string[] = this.eventsService.getCategories();

  showNameErrors: boolean = false;  

  constructor(private formBuilder: FormBuilder, private eventsService: EventsService) {
    this.initForm();
  }

  get f() {
    return this.form.controls;
  }

  initForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required, Validators.pattern(/^\S+(\s?\S+)*$/)],
      description: ['', Validators.required],
      durationHours: [''],
      durationMinutes: [''],
      location: ['', Validators.required],
      categorization: [this.categories[0], Validators.required],
      organizer: ['', Validators.required, Validators.pattern(/^\S+(\s?\S+)*$/)],
      periodicity: ['', Validators.required],
      maxParticipants: [''],
    });
  }

  onFileSelect($event: Event) {
    const fileInput = event!.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    this.eventsService.register(formData).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: () => {
        console.log('Evento registrado');
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      }
    }); 
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
