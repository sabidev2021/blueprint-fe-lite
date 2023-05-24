import {Injectable} from '@angular/core';
import {HttpClientService} from "@core/http/http-client.service";
import {SabiBaseService} from "@core/base/sabi-base.service";
import {DbLocalService} from "@core/dblocal/db-local.service";
import {Province} from "@app/module/be/models/province.model";

@Injectable()

export class AddressService extends SabiBaseService<Province> {

  constructor(httpClient: HttpClientService, db: DbLocalService) {
    super('company-service', 'province', httpClient, db)
  }
}

