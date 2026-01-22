import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

// Register Swiper custom elements
register();

@Component({
  selector: 'app-room-categories',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './room-categories.component.html',
  styleUrls: ['./room-categories.component.scss']
})
export class RoomCategoriesComponent implements AfterViewInit {
  // Access the swiper element from the HTML
  @ViewChild('swiperRef') swiperRef!: ElementRef;

  roomItems = [
    { name: 'Master Bedrooms', count: 42, img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80' },
    { name: 'Luxury Kitchens', count: 28, img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80' },
    { name: 'Modern Living', count: 56, img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80' },
    { name: 'Home Offices', count: 15, img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80' },
    { name: 'Dining Space', count: 22, img: 'https://luminor-eight.vercel.app/images/blog/blog-item-2.jpg' }
  ];

  ngAfterViewInit() {
    // Configuration object
    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
        dynamicBullets: true,
      },
      navigation: true,
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1400: { slidesPerView: 4 }
      },
    };

    // Inject settings and initialize
    Object.assign(this.swiperRef.nativeElement, swiperParams);
    this.swiperRef.nativeElement.initialize();
  }
}