import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentSection = '';
  mobileMenuOpen = false;

  // Sprachumschalter: 'en' oder 'de'
  currentLang: 'en' | 'de' = 'en';

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'de' : 'en';
    console.log('Sprache ist jetzt:', this.currentLang);
    // Hier könntest du z. B. auch eine Übersetzungsfunktion anstoßen
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
}
