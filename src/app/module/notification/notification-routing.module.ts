import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotificationMenuComponent} from '../notification/notification-menu/notification-menu.component';
import {NotificationAllComponent} from "@app/module/notification/notification-all/notification-all.component";
import {NotificationUnreadComponent} from "@app/module/notification/notification-unread/notification-unread.component";

const routes: Routes = [
  {path: '', component: NotificationMenuComponent},
  {path: 'all', component: NotificationAllComponent},
  {path: 'unread', component: NotificationUnreadComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NotificationRoutingModule {
}
