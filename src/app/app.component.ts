import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  ngOnInit(): void {
  document.addEventListener('mousemove', (e) => {
    const shadow = document.querySelector('.cursor-shadow') as HTMLElement;
    if (!shadow) return;

    shadow.style.left = `${e.clientX}px`;
    shadow.style.top = `${e.clientY}px`;
  });
}
}
