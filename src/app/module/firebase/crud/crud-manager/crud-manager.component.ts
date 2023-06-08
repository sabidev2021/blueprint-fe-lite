import { Component } from '@angular/core';
import {BackOfficeLayoutService} from "@app/layout/backofifce/back-office-layout.service";

@Component({
  selector: 'app-example-crud',
  templateUrl: './crud-manager.component.html',
  styleUrls: ['./crud-manager.component.scss']
})
export class CrudManagerComponent {

  constructor(private layoutService: BackOfficeLayoutService) {
  }

  ngOnInit(): void {
    this.initLayout()
  }

  private initLayout() {
    this.layoutService.sideMenu = true
    this.layoutService.header = true
    this.layoutService.footer = true
  }

}
