import {
    Component, OnInit,
    ViewEncapsulation
}
    from '@angular/core';
import {BackOfficeLayoutService} from '@app/layout/backofifce/back-office-layout.service';

@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
    styleUrls: ['./notfound.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class NotfoundComponent implements OnInit {
    constructor(
        private backOfficeLayoutService: BackOfficeLayoutService
    ) {
    }

    ngOnInit(): void {
        this.initLayout()
    }

    initLayout() {
        this.backOfficeLayoutService.sideMenu = false
        this.backOfficeLayoutService.header = false
        this.backOfficeLayoutService.footer = false
    }

}
