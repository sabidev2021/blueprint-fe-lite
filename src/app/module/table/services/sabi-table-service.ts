import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()

export class SabiTableService {
    constructor(
      private http: HttpClient) {
    }

    public getData() {
      const baseUrl = 'https://63180c0cf6b281877c61c3fa.mockapi.io/borrower';
      return this.http.get<any>(baseUrl);
  }

}
