import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { SnackbarComponent } from './../../shared/snackbar/snackbar.component'; // Pfad ggf. anpassen

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule,
    SnackbarComponent,
  ],
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss'],
})
export class ContactFormComponent {
  contactForm: FormGroup;
  submitted = false;

  snackbarMessage = '';
  snackbarVisible = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacy: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      console.log('Form sent:', this.contactForm.value);
      this.contactForm.reset();
      this.submitted = false;
      this.showSnackbar('Thanks for your message!');
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || this.submitted)
    );
  }

  showSnackbar(message: string) {
    this.snackbarMessage = message;
    this.snackbarVisible = true;
    setTimeout(() => {
      this.snackbarVisible = false;
    }, 3000);
  }
}
