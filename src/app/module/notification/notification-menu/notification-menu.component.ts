import {
    Component,
    OnInit,
} from '@angular/core';
import {getErrMessage} from '@core/handler/sabi-error-response';
import {SabiResponse} from '@core/handler/sabi-response';
import {BackOfficeLayoutService} from '@app/layout/backofifce/back-office-layout.service';
import {NotificationService} from '../notification.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-notification-menu',
    templateUrl: './notification-menu.component.html',
    styleUrls: ['./notification-menu.component.scss']
})
export class NotificationMenuComponent implements OnInit {

    constructor(
        private layoutService: BackOfficeLayoutService,
        private notificationService: NotificationService,
    ) {
    }

    ngOnInit(): void {
        this.initLayout()
        this.fetchUnreadNotificationBadges()
    }

    initLayout() {
        this.layoutService.sideMenu = true
        this.layoutService.header = true
        this.layoutService.footer = true
    }

    private fetchUnreadNotificationBadges() {
        this.notificationService.fetchUnreadNotificationNumber().subscribe({
            next: (response: SabiResponse<number>) => {
                console.info(response)
            },
            error: (err: HttpErrorResponse) => {
                this.errorServices(err);
            }
        })
    }

    errorServices(err: HttpErrorResponse) {
        console.error(getErrMessage(err))
    }
}
