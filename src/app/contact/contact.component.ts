import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule, ReactiveFormsModule, HttpClientModule
  ],
  templateUrl: './contact.component.html',
  standalone: true,
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initialize the form with validation
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      alert('Message sent successfully!');
      this.contactForm.reset();
    }
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/your-resume.pdf';
    link.download = 'Your_Resume.pdf';
    link.click();
  }

  email = 'macroysimen@gmail.com';
}
