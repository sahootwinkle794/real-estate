import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface to define the structure of a Property object.
 * This helps prevent errors when accessing property fields in the HTML.
 */
export interface Property {
  title: string;
  price: string;
  location: string;
  image: string;
  status: 'For Sale' | 'For Rent';
  beds: number;
  baths: number;
  sqft: number;
}

@Component({
  selector: 'app-home-featured',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent {
  /**
   * The @Input decorator allows the HomeComponent (Parent) 
   * to pass the featuredList data into this component.
   */
  @Input() properties: Property[] = [];

  constructor() {}

  /**
   * Optional: A method to handle clicking on a property card
   * Useful for navigating to a 'Property Details' page later.
   */
  viewDetails(property: Property): void {
    console.log('Navigating to details for:', property.title);
    // Logic for router.navigate would go here
  }
}