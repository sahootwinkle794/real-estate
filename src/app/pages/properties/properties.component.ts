import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  allProperties = [
    { id: 1, title: 'Villa Marwa', price: 1200000, type: 'Villa', beds: 4, baths: 3, area: 3500, img: 'https://luminor-eight.vercel.app/images/home/home-5.jpg', status: 'Sale' },
    { id: 2, title: 'Skyline Apartment', price: 850000, type: 'Apartment', beds: 2, baths: 2, area: 1200, img: 'https://luminor-eight.vercel.app/images/home/home-1.jpg', status: 'Rent' },
    { id: 3, title: 'Urban Loft', price: 450000, type: 'Apartment', beds: 1, baths: 1, area: 950, img: 'https://luminor-eight.vercel.app/images/section/location-4.jpg', status: 'Sale' },
    { id: 4, title: 'Palm Jumeirah Mansion', price: 5400000, type: 'Villa', beds: 6, baths: 5, area: 8000, img: 'https://luminor-eight.vercel.app/images/home/home-5.jpg', status: 'Sale' },
    // Add more items as needed
  ];

  filteredProperties = [...this.allProperties];

  ngOnInit(): void {}

  filterByType(type: string) {
    if (type === 'All') {
      this.filteredProperties = [...this.allProperties];
    } else {
      this.filteredProperties = this.allProperties.filter(p => p.type === type);
    }
  }
}