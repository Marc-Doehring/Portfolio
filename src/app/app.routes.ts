// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'legal-notice', component: LegalNoticeComponent }
];
