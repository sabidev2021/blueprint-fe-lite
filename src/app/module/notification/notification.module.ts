import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {NotificationRoutingModule} from './notification-routing.module';
import {NotificationMenuComponent} from './notification-menu/notification-menu.component';
import {NotificationAllComponent} from './notification-all/notification-all.component';
import {NotificationUnreadComponent} from './notification-unread/notification-unread.component';
import {NotificationService} from "@app/module/notification/notification.service";
import {NotificationPipe} from './notification.pipe';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from "primeng/button";
import {NotificationReadComponent} from './notification-read/notification-read.component';

@NgModule({
    declarations: [
        NotificationMenuComponent,
        NotificationAllComponent,
        NotificationUnreadComponent,
        NotificationPipe,
        NotificationReadComponent,
    ],
    imports: [
        CommonModule,
        NotificationRoutingModule,
        TabViewModule,
        ButtonModule
    ],
    exports: [
        NotificationMenuComponent,
        NotificationUnreadComponent,
    ],
    providers: [
        NotificationService,
        DatePipe
    ]
})

export class NotificationModule {
}
