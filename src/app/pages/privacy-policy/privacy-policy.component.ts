import { Component } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-privacy-policy',
  imports: [ TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  ngOnInit(): void {
  console.log('PrivacyPolicyComponent loaded');
}

}
