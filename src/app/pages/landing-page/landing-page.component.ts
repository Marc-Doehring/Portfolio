import { Component } from '@angular/core';
import { AbovethefoldComponent } from '../abovethefold/abovethefold.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { MyskillsComponent } from '../myskills/myskills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactFormComponent } from '../contactform/contactform.component';
import { SayAboutMeComponent } from '../say-about-me/say-about-me.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    AbovethefoldComponent,
    AboutmeComponent,
    MyskillsComponent,
    PortfolioComponent,
    ContactFormComponent,
    SayAboutMeComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {}
