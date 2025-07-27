import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  standalone: true,
})
export class SnackbarComponent {
  @Input() message = '';
  @Input() show = false;
}
