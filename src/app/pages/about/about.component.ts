import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  stats = [
    { label: 'Properties Sold', value: '1,200+' },
    { label: 'Happy Clients', value: '950+' },
    { label: 'Expert Agents', value: '25+' },
    { label: 'Years Experience', value: '15' }
  ];

  team = [
    { name: 'Jonathan Reeves', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80' },
    { name: 'Sarah Jenkins', role: 'Head of Sales', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80' },
    { name: 'Marcus Chen', role: 'Lead Architect', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80' }
  ];
}