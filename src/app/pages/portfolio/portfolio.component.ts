import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Join',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      image: 'assets/img/join.png',
      description: 'A collaborative task manager similar to Trello.'
    },
    {
      title: 'El Pollo Loco',
      stack: 'HTML | CSS | JavaScript',
      image: 'assets/img/pollo.png',
      description: 'A jump-and-run browser game featuring chickens and enemies.'
    },
    {
      title: 'DA Bubble',
      stack: 'Angular | Firebase | TypeScript',
      image: 'assets/img/bubble.png',
      description: 'A real-time chat app built with Angular and Firebase.'
    }
  ];

  hoveredProjectIndex: number | null = null;
  selectedProject: any = null;

  openModal(project: any) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }
}
