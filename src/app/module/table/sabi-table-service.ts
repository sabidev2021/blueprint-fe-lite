import {Injectable} from '@angular/core';
import {Borrower} from "@app/module/table/model/customer.model";
import {SabiBaseService} from "@core/base/sabi-base.service";
import {DbLocalService} from "@core/dblocal/db-local.service";
import {environment as env} from "@env/environment.dev";
import {HttpClientService} from "@core/http/http-client.service";
import {PagingData} from "@core/base/pagingData";

@Injectable()

export class SabiTableService extends SabiBaseService<Borrower> {
    constructor(httpClient: HttpClientService, db: DbLocalService) {
        super(env.services_name.mockoonBorrowerService.title, 'borrower', httpClient, db);
    }

    public getBorrowers(keyword: string, limit: number, page: number) {
        const functionUrl = `borrower/${page}/${limit}?keyword=${keyword}`;
        return this.httpGetY<PagingData<Borrower>>(functionUrl);
    }
}
