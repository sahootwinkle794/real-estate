import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  isSubmitted = false;

  onSubmit() {
    console.log('Form Data:', this.contactData);
    this.isSubmitted = true;
    
    // Reset form after showing success message
    setTimeout(() => {
      this.isSubmitted = false;
      this.contactData = { name: '', email: '', phone: '', message: '' };
    }, 4000);
  }
}