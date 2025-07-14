import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TESTIMONIALS } from './testimonials'; 

@Component({
  selector: 'app-say-about-me',
  templateUrl: './say-about-me.component.html',
  styleUrls: ['./say-about-me.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SayAboutMeComponent {
  testimonials = TESTIMONIALS; 
  activeIndex = 0;

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goTo(index: number) {
    this.activeIndex = index;
  }
}
