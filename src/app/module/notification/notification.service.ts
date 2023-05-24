import {Injectable} from '@angular/core';
import {SabiBaseService} from "@core/base/sabi-base.service";
import {HttpClientService} from "@core/http/http-client.service";
import {DbLocalService} from "@core/dblocal/db-local.service";
import {PushTemplate} from "@app/module/notification/models/push-template.model";
import {PushNotification} from "@app/module/notification/models/push-notification.model";
import {environment as env} from "@env/environment.dev";
import {PagingData} from "@core/base/pagingData";
import {Observable} from "rxjs";
import {SabiResponse} from "@core/handler/sabi-response";

@Injectable()
export class NotificationService extends SabiBaseService<PushNotification> {

    constructor(httpClient: HttpClientService, db: DbLocalService) {
        super(env.services_name.notificationService.title, 'notification/push', httpClient, db)
    }

    public fetchNotificationTemplatesList() {
        return this.httpGetListY<PushTemplate>(`templates`)
    }

    public fetchNotificationNumber() {
        return this.httpGetY<number>(`all/count`)
    }

    public readNotification(id: any) {
        return this.httpClient.patch<any>(this.serviceName, `patch-${this.moduleName}`, `${this.moduleName}/${id}`);
    }

    public fetchNotificationList(): Observable<SabiResponse<PagingData<PushNotification>>> {
        return this.httpClient.get<PagingData<PushNotification>>(this.serviceName, `get-all-${this.moduleName}`, `${this.moduleName}/all`);
    }

    public fetchUnreadNotificationNumber() {
        return this.httpGetY<number>(`unread/count`)
    }


    public fetchUnreadNotificationList(): Observable<SabiResponse<PagingData<PushNotification>>> {
        return this.httpClient.get<PagingData<PushNotification>>(this.serviceName, `get-all-unread-${this.moduleName}`, `${this.moduleName}/unread`);
    }

    public fetchInviteMitraNotificationNumber() {
        return this.httpGetY<number>(`invite-mitra/count`)
    }

    public fetchInviteMitraNotificationList(): Observable<SabiResponse<PagingData<PushNotification>>> {
        return this.httpClient.get<PagingData<PushNotification>>(this.serviceName, `get-all-invite-mitra-${this.moduleName}`, `${this.moduleName}/invite-mitra`);
    }

}
