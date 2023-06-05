import {Component, HostListener, Input, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {animate, style, transition, trigger,} from '@angular/animations';
import {AuthService} from "@core/auth/auth.service";
import {environment} from "@env/environment.dev";
import {Location} from "@angular/common";
import {ManageProfileService} from "@app/module/manage-profile/manage-profile.service";
import {DbLocalService} from "@core/dblocal/db-local.service";
import {DashboardTrackerService} from "@app/module/dashboard/services/dashboard-tracker.service";
import {BackOfficeLayoutService} from "@app/layout/backofifce/back-office-layout.service";

@Component({
    selector: 'header-backoffice',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('headerOut', [
            transition('void => *', [
                style({transform: 'translateY(-100%)'}),
                animate(500)
            ]),
            transition('* => void', [
                animate(500, style({transform: 'translateY(-100%)'}))
            ])
        ])
    ]
})

export class HeaderBackofficeComponent implements OnInit {

    @ViewChild('menu_button') menuButton!: ElementRef;
    @ViewChild('topbar_menu_button') topbarMenuButton!: ElementRef;
    @ViewChild('topbar_menu') menu!: ElementRef;

    @Input() imgPath = "./assets/";
    @Input() imgFileName = "/logo/logo-sabi.png";
    @Input() iconUser = this.imgPath + "/icon/avatar/user-dummy.svg";
    @Input() iconBoardTask = "/icon/navbar/board-task.svg";
    @Input() iconNotif = "/icon/navbar/notification.svg";
    @Input() iconSetting = "/icon/navbar/gear.svg";

    username = '';
    offsetFlag = true;
    notifClicked = false;

    constructor(
        private auth: AuthService,
        private location: Location,
        private profile: ManageProfileService,
        private db: DbLocalService,
        private tracker: DashboardTrackerService,
        public layoutService: BackOfficeLayoutService,
    ) {
    }

    ngOnInit(): void {
        this.getUsername()
    }

    @HostListener('window:scroll', ['$event']) getScrollHeight() {
        this.offsetFlag = window.scrollY <= 30;
    }

    public logout() {
        this.auth.logout(`${environment.services_name.landingService.baseUrl}`)
            .then(r => r)
            .catch(() => {
                    this.tracker.onLogoutMessage({message: 'Oops terjadi kesalahan sistem'})
                }
            )
    }

    private getUsername() {
        return this.username = 'Sabi Ranger'
    }
}
