import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Wichtig

@Component({
  selector: 'app-say-about-me',
  templateUrl: './say-about-me.component.html',
  imports: [CommonModule], // ⬅️ das hier brauchst du
  styleUrls: ['./say-about-me.component.scss']
})
export class SayAboutMeComponent {
  testimonials = [
    {
      quote: '“Working with you was an absolute pleasure. You deliver clean code and creative solutions!”',
      author: '– Jane Doe, Project Manager'
    },
    {
      quote: '“Your sense of design and technical expertise really pushed our product forward.”',
      author: '– John Smith, Product Owner'
    },
    {
      quote: '“Fast, reliable, and with a great eye for design. You always exceed expectations.”',
      author: '– Sarah Lee, UX Designer'
    }
  ];

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
