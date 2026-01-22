import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  // Static data for immediate UI testing
  footer = {
    company: 'Luminor Real Estate Group',
    address: '123 Luxury Lane, Dubai Marina, UAE',
    phone: '+971 50 123 4567',
    email: 'info@luminor-realestate.com'
  };
}