import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { MailService } from '../../services/mail.service';
import { environment } from '../../../environment';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private readonly mailService = inject(MailService);
  private readonly fb = inject(FormBuilder);

  readonly portfolio = PORTFOLIO;
  readonly phoneUrl = 'tel:' + PORTFOLIO.phone.replace(/\s/g, '');

  readonly userForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly alertMessage = signal('');
  readonly showAlert = signal(false);
  readonly isFormSubmittedSuccessfully = signal(false);
  readonly isSubmitting = signal(false);

  async onSubmit(): Promise<void> {
    this.userForm.markAllAsTouched();
    if (this.userForm.invalid || this.isSubmitting()) {
      return;
    }

    this.isSubmitting.set(true);
    const formData = new FormData();
    formData.append('name', this.userForm.get('name')?.value ?? '');
    formData.append('email', this.userForm.get('email')?.value ?? '');
    formData.append('body', this.userForm.get('message')?.value ?? '');
    formData.append('access_key', environment.form_access_key);
    formData.append('subject', 'Portfolio Contact Form Message');
    formData.append('from_name', 'Prabhat Dixit Portfolio');

    try {
      const res = await this.mailService.sendEmail(formData);
      if (!res.ok) {
        throw new Error('Request failed');
      }
      this.alertMessage.set('Thank you! Your message has been sent successfully. I will get back to you shortly.');
      this.isFormSubmittedSuccessfully.set(true);
      this.userForm.reset();
    } catch {
      this.alertMessage.set('Unable to send message right now. Please email me directly at ' + this.portfolio.email);
      this.isFormSubmittedSuccessfully.set(false);
    } finally {
      this.isSubmitting.set(false);
      this.showAlert.set(true);
      this.hideAlert();
    }
  }

  private hideAlert(): void {
    setTimeout(() => {
      this.showAlert.set(false);
    }, 6000);
  }
}
