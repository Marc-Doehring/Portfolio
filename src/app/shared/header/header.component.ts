import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentSection = '';
  mobileMenuOpen = false;
  currentLang: 'en' | 'de' = 'en';

  constructor(private router: Router) {}

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'de' : 'en';
    console.log('Sprache ist jetzt:', this.currentLang);
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
      // Auf der Startseite: scrollen
      const element = document.getElementById('aboveTheFold');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Nicht auf der Startseite: navigieren
      this.router.navigateByUrl('/').then(() => {
        // Nach Navigation scrollen (optional)
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
