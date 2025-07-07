import { Component } from '@angular/core';

@Component({
  selector: 'app-abovethefold',
  standalone: true, // <--- wichtig
  imports: [], // falls du später ngIf, RouterLink etc. brauchst: CommonModule & RouterModule
  templateUrl: './abovethefold.component.html',
  styleUrls: ['./abovethefold.component.scss'] // <--- Achtung: styleUrls (Plural!)
})
export class AbovethefoldComponent {}

