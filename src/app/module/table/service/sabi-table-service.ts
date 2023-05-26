import {Injectable} from '@angular/core';
import {environment as env} from "@env/environment.dev";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class SabiTableService {
    constructor(
      private http: HttpClient) {
        // super(env.services_name.mockoonBorrowerService.title, 'borrower', httpClient, db);
    }

    public getData() {
        return this.http.get<any>(env.services_name.mockoonBorrowerService.baseUrl);
    }

}
