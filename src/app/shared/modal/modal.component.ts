import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { CommonModule } from '@angular/common'; // ⬅️ hinzufügen


@Component({
  selector: 'app-modal',
  standalone: true, // Falls du Standalone-Komponenten verwendest
  imports: [CommonModule], // ⬅️ *ngIf / Pipes / ngFor etc.
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() project: any; // falls du ein Projekt übergibst
  @Input() hasNext: boolean = false;
  @Input() hasPrev: boolean = false;

  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  emitNext() {
    this.next.emit();
  }

  emitPrev() {
    this.prev.emit();
  }

  emitClose() {
    this.close.emit();
  }
}
