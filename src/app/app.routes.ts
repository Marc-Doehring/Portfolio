// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'legal-notice', component: LegalNoticeComponent }
];
