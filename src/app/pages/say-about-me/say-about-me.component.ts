import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TESTIMONIALS as TESTIMONIALS_EN } from './testimonials';
import { TESTIMONIALS as TESTIMONIALS_DE } from './testimonials.de';

@Component({
  selector: 'app-say-about-me',
  templateUrl: './say-about-me.component.html',
  styleUrls: ['./say-about-me.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class SayAboutMeComponent implements OnInit {
  testimonials = TESTIMONIALS_EN;
  activeIndex = 0;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.setTestimonialsByLanguage(this.translate.currentLang || 'en');

    this.translate.onLangChange.subscribe((event) => {
      this.setTestimonialsByLanguage(event.lang);
      this.activeIndex = 0;
    });
  }

  setTestimonialsByLanguage(lang: string) {
    this.testimonials = lang === 'de' ? TESTIMONIALS_DE : TESTIMONIALS_EN;
  }

  prev() {
    this.activeIndex =
      (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }

  goTo(index: number) {
    this.activeIndex = index;
  }

  getLeftIndex(): number {
    return (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  getRightIndex(): number {
    return (this.activeIndex + 1) % this.testimonials.length;
  }

  handleClick(clickedIndex: number): void {
  if (clickedIndex !== this.activeIndex) {
    this.activeIndex = clickedIndex;
  }
}
}
