import {Injectable} from '@angular/core';
import {HttpClientService} from "@core/http/http-client.service";
import {EmployePosition} from "@app/module/be/models/employee.model";
import {SabiBaseService} from "@core/base/sabi-base.service";
import {DbLocalService} from "@core/dblocal/db-local.service";
import {Observable} from "rxjs";
import {SabiResponse} from "@core/handler/sabi-response";

@Injectable()

export class EmployeePositionService extends SabiBaseService<EmployePosition> {

  constructor(httpClient: HttpClientService, db: DbLocalService) {
    super('company-service', 'employee/position', httpClient, db)
  }

  public fetchEmployeePosition() {
    return this.getList();
  }

  getManagementPosition(): Observable<SabiResponse<EmployePosition>> {
    return this.httpClient.get<EmployePosition>('company-service', 'employee/position/management', `employee/position/management`);
  }
}
