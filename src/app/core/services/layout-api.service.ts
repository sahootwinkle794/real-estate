import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Import 'of' to return static data

@Injectable({ providedIn: 'root' })
export class LayoutApiService {
  
  // Static Menu Data
  private mockMenu = {
    data: [
      { title: 'Home', path: '/' },
      { title: 'Properties', path: '/properties' },
      { title: 'Villas', path: '/villas' },
      { title: 'Contact', path: '/contact' }
    ]
  };

  // Static Footer Data
  private mockFooter = {
    data: {
      company: 'Luminor Real Estate Group',
      address: '123 Luxury Lane, Dubai Marina, UAE',
      phone: '+971 50 123 4567',
      email: 'info@luminor-realestate.com'
    }
  };

  constructor() {} // Removed HttpClient for now

  getMenu(): Observable<any> {
    return of(this.mockMenu); // Returns data as an Observable
  }

  getFooter(): Observable<any> {
    return of(this.mockFooter);
  }
}