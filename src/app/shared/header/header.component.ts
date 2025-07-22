import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core'; // <-- auch TranslateModule importieren!

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule], // <-- TranslateModule hier rein
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentSection = '';
  mobileMenuOpen = false;
  currentLang: 'en' | 'de' = 'en';

  constructor(private router: Router, private translate: TranslateService) {
    this.currentLang = this.translate.getDefaultLang() as 'en' | 'de';
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLang);
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
