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
  imports: [CommonModule, TranslateModule]
})
export class SayAboutMeComponent implements OnInit {
  testimonials = TESTIMONIALS_EN;
  activeIndex = 0;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.setTestimonialsByLanguage(this.translate.currentLang || 'en');

    this.translate.onLangChange.subscribe(event => {
      this.setTestimonialsByLanguage(event.lang);
      this.activeIndex = 0;
    });
  }

  setTestimonialsByLanguage(lang: string) {
    if (lang === 'de') {
      this.testimonials = TESTIMONIALS_DE;
    } else {
      this.testimonials = TESTIMONIALS_EN;
    }
  }

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
