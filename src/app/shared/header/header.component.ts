import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentSection = '';
  mobileMenuOpen = false;

  currentLang: 'en' | 'de' = 'en';
  languageSvg: SafeHtml = '';

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.http.get('/header/3. Language switch.svg', { responseType: 'text' })
      .subscribe(svg => {
        this.languageSvg = this.sanitizer.bypassSecurityTrustHtml(svg);
      });
  }

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
