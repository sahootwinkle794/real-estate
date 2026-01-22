import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { RoomCategoriesComponent } from './components/room-categories/room-categories.component';
import { FeaturedComponent } from './components/featured/featured.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    HeroComponent, 
    
    RoomCategoriesComponent,
    FeaturedComponent  
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoriesList: any[] = [];
  featuredList: any[] = [];

  ngOnInit(): void {
    // Data for the "Browse by Property Type" (The Grid)
    this.categoriesList = [
      { title: 'Luxury Villas', image: 'https://luminor-eight.vercel.app/images/home/home-5.jpg', count: '45' },
      { title: 'Apartments', image: 'https://luminor-eight.vercel.app/images/home/home-1.jpg', count: '120' },
      { title: 'Offices', image: 'https://luminor-eight.vercel.app/images/section/location-4.jpg', count: '12' },
      { title: 'Townhouses', image: 'https://luminor-eight.vercel.app/images/home/home-1.jpg', count: '33' }
    ];
    // Data for "Featured Properties"
    this.featuredList = [
      { 
        title: 'Modern Sunset Villa', 
        price: '$1,250,000', 
        location: 'Palm Jumeirah, Dubai', 
        image: 'https://luminor-eight.vercel.app/images/home/home-5.jpg',
        status: 'For Sale',
        beds: 4, baths: 3, sqft: 3500
      },
      {    
        title: 'Skyline Luxury Penthouse', 
        price: '$850,000', 
        location: 'Downtown, Dubai', 
        image: 'https://luminor-eight.vercel.app/images/home/home-1.jpg',
        status: 'For Rent',
        beds: 3, baths: 2, sqft: 2200
      }
    ];
  }
}