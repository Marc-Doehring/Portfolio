import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit {
  projects = [
    {
      title: 'Join',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      image: '/portfolio/join.png',
      description: 'A collaborative task manager similar to Trello.'
    },
    {
      title: 'El Pollo Loco',
      stack: 'HTML | CSS | JavaScript',
      image: '/portfolio/loco.png',
      description: 'A jump-and-run browser game featuring chickens and enemies.'
    },
    {
      title: 'DA Bubble',
      stack: 'Angular | Firebase | TypeScript',
      image: '/portfolio/bubble.png',
      description: 'A real-time chat app built with Angular and Firebase.'
    }
  ];

  hoveredProjectIndex: number | null = null;
  selectedProjectIndex: number | null = null;

  @ViewChildren('projectEntry', { read: ElementRef }) projectEntries!: QueryList<ElementRef>;

  openModal(index: number): void {
    this.selectedProjectIndex = index;
  }

  closeModal(): void {
    this.selectedProjectIndex = null;
  }

  nextProject() {
  if (this.selectedProjectIndex !== null && this.selectedProjectIndex < this.projects.length - 1) {
    this.selectedProjectIndex++;
  }
}

prevProject() {
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
