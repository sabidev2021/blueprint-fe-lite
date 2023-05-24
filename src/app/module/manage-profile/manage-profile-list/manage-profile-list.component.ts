import {Component, OnInit} from '@angular/core';
import {BackOfficeLayoutService} from "@app/layout/backofifce/back-office-layout.service";

@Component({
    selector: 'app-manage-profile-list',
    templateUrl: './manage-profile-list.component.html',
    styleUrls: ['./manage-profile-list.component.scss']
})
export class ManageProfileListComponent implements OnInit {

    constructor(
        private layoutService: BackOfficeLayoutService
    ) {
    }

    ngOnInit() {
        this.initLayout()
    }

    initLayout() {
        this.layoutService.header = true
        this.layoutService.sideMenu = true
        this.layoutService.footer = true
    }


}
