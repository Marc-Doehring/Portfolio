import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() project: any;
  @Input() currentIndex: number = 0;
  @Input() projects: any[] = [];

  @Output() close = new EventEmitter<void>();
  @Output() changeProject = new EventEmitter<number>();

  emitNext(): void {
    const nextIndex = (this.currentIndex + 1) % this.projects.length;
    this.changeProject.emit(nextIndex);
  }

  emitPrev(): void {
    const prevIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.changeProject.emit(prevIndex);
  }

  emitClose(): void {
    this.close.emit();
  }
}
