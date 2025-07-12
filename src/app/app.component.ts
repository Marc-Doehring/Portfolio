import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  ngOnInit(): void {
    document.addEventListener('mousemove', (e) => {
      const shadow = document.querySelector('.cursor-shadow') as HTMLElement;
      if (!shadow) return;

      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      shadow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(61, 207, 182, 0.15), transparent 40%)`;
    });
  }
}
