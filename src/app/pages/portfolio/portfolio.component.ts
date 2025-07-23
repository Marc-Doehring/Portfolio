import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../shared/modal/modal.component';
import { StackSplitPipe } from '../../pipes/stack-split.pipe';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { PROJECTS_EN } from './projects-en';
import { PROJECTS_DE } from './projects-de';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ModalComponent, StackSplitPipe, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit {
  projects = PROJECTS_EN;

  hoveredProjectIndex: number | null = null;
  selectedProjectIndex: number | null = null;

  @ViewChildren('projectEntry', { read: ElementRef }) projectEntries!: QueryList<ElementRef>;

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(event => {
      this.setProjects(event.lang);
    });

    this.setProjects(this.translate.currentLang); // initiale Sprache setzen
  }

  setProjects(lang: string): void {
    this.projects = lang === 'de' ? PROJECTS_DE : PROJECTS_EN;
  }

  openModal(index: number): void {
    this.selectedProjectIndex = index;
  }

  closeModal(): void {
    this.selectedProjectIndex = null;
  }

  nextProject(): void {
    if (this.selectedProjectIndex !== null && this.selectedProjectIndex < this.projects.length - 1) {
      this.selectedProjectIndex++;
    }
  }

  prevProject(): void {
    if (this.selectedProjectIndex !== null && this.selectedProjectIndex > 0) {
      this.selectedProjectIndex--;
    }
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  ngAfterViewInit(): void {
    // Falls in Zukunft benötigt für Scroll oder Animationen
  }
}
