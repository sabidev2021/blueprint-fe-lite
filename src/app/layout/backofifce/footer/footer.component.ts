import { Component } from '@angular/core';
import {BackOfficeLayoutService} from "@app/layout/backofifce/back-office-layout.service";

@Component({
  selector: 'footer-backoffice',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(
      public layoutService: BackOfficeLayoutService
  ) {
  }
}
