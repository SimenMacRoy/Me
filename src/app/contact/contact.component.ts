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
  email = 'macroysimen@gmail.com'; // Your displayed email
  apiUrl = 'http://localhost:3001/send-message'; // Update with deployed URL when live

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.http.post(this.apiUrl, this.contactForm.value).subscribe(
        (response) => {
          alert('Message sent successfully!');
          this.contactForm.reset();
        },
        (error) => {
          alert('Failed to send message.');
          console.error(error);
        }
      );
    }
  }
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/MacResume.pdf';
    link.setAttribute('download', 'MacResume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
