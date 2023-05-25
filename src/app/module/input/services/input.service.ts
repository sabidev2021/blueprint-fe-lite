import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor(
    private http: HttpClient,
  ) { }

  public submit(data: any): Observable<any> {
    const url = 'https://eojdneomeqbveqq.m.pipedream.net';
    return this.http.post<any>(url, data);
  }
}
