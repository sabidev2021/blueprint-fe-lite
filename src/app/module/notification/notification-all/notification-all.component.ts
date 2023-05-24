import {Component, OnInit} from '@angular/core';
import {environment as env} from "@env/environment.dev";

@Component({
    selector: 'app-notification-all',
    templateUrl: './notification-all.component.html',
    styleUrls: ['./notification-all.component.scss']
})
export class NotificationAllComponent implements OnInit {
    serviceName = env.services_name.notificationService.title;

    constructor( ) { }

    ngOnInit(): void { }
}
