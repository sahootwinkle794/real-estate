import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logo = 'https://luminor-eight.vercel.app/images/logo/logo.svg'; // Example logo

  // Static data for UI testing
  menus = [
    { title: 'Home', path: '/' },
    { title: 'Properties', path: '/properties' },
    { title: 'About Us', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ];
}