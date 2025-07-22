import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-abovethefold',
  standalone: true, 
  imports: [TranslateModule, CommonModule], 
  templateUrl: './abovethefold.component.html',
  styleUrls: ['./abovethefold.component.scss'] 
})
export class AbovethefoldComponent {}

