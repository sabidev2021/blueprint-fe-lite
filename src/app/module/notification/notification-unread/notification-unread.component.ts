import {Component, OnInit} from '@angular/core';
import {environment as env} from "@env/environment.dev";
import {NotificationService} from "@app/module/notification/notification.service";
import {HttpErrorResponse} from "@angular/common/http";
import {getErrMessage} from "@core/handler/sabi-error-response";
import {Router} from "@angular/router";

@Component({
    selector: 'app-notification-unread',
    templateUrl: './notification-unread.component.html',
    styleUrls: ['./notification-unread.component.scss']
})
export class NotificationUnreadComponent implements OnInit {
    loader = true;
    serviceName = env.services_name.notificationService.title;

    constructor(
        private notificationService: NotificationService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.fetchUnreadNotificationList()
    }

    private fetchUnreadNotificationList() {
        this.notificationService.fetchUnreadNotificationList().subscribe({
            next: (response) => {
                console.info(response)
            },
            error: (err: HttpErrorResponse) => {
                console.error(getErrMessage(err))
            },
            complete: () => {
                this.loader = false
            }
        })
    }
}
