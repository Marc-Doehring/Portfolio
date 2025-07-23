import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentSection = '';
  mobileMenuOpen = false;
  currentLang: 'en' | 'de' = 'en';

  constructor(private router: Router, private translate: TranslateService) {
    // 1. Fallback-Sprache setzen
    this.translate.setDefaultLang('en');

    // 2. Sprache aus localStorage laden oder 'en' als Standard
    const savedLang = localStorage.getItem('lang') as 'en' | 'de';

if (savedLang === 'de' || savedLang === 'en') {
  this.currentLang = savedLang;
} else {
  this.currentLang = 'en'; // ✅ EN als Fallback
  localStorage.setItem('lang', 'en');
}

this.translate.use(this.currentLang);

  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLang);
    localStorage.setItem('lang', this.currentLang);
  }

  setLang(lang: 'en' | 'de') {
  if (this.currentLang !== lang) {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}

  setCurrentSection(section: string) {
    this.currentSection = section;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  navigateMobile(section: string) {
    this.setCurrentSection(section);
    this.mobileMenuOpen = false;
  }

  scrollOrNavigate(event: Event) {
    event.preventDefault();
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      const element = document.getElementById('aboveTheFold');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      this.router.navigateByUrl('/').then(() => {
        const element = document.getElementById('aboveTheFold');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  }
}
