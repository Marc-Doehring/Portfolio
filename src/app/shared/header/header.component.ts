import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   currentSection = '';
  mobileMenuOpen = false;

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
