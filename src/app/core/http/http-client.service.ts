import {Injectable} from '@angular/core';
import {HttpErrorHandler} from "@core/http/http-error-handler.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from 'rxjs';
import {environment as env} from "@env/environment.dev";
import {SabiResponse} from "@core/handler/sabi-response";
import {AuthService} from "@core/auth/auth.service";
import {HttpHeaderService} from "@core/http/http-header.service";

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {
  private domainUrl!: string;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler,
    private auth: AuthService,
    private httpServiceHeader: HttpHeaderService
  ) {
  }

  private initNonAuthHttpClient(service: string) {
    this.setDomainUrl(service);
  }

  private initHttpClient(service: string) {
    this.validateToken()
    this.setDomainUrl(service);
  }

  setDomainUrl(service: string) {
    switch (service) {
      case env.services_name.companyService.title:
        this.domainUrl = env.services_name.companyService.baseUrl;
        break;
      case env.services_name.userAdminService.title:
        this.domainUrl = env.services_name.userAdminService.baseUrl;
        break;
      case env.services_name.inventoryService.title:
        this.domainUrl = env.services_name.inventoryService.baseUrl;
        break;
      case env.services_name.salesService.title:
        this.domainUrl = env.services_name.salesService.baseUrl;
        break;
      case env.services_name.notificationService.title:
        this.domainUrl = env.services_name.notificationService.baseUrl;
        break;
      case env.services_name.salesDashboardService.title:
        this.domainUrl = env.services_name.salesDashboardService.baseUrl;
        break;
    }
  }

  validateToken() {
    if (this.auth.isTokenExpired()) {
      console.log("Http service detect token has expired")
      this.auth.updateToken().then(r => r)
    }
  }

  initHttpHeaders(operation: string, params?: HttpParams) {
    if (this.auth.envAttributes !== null || undefined) {
      this.httpServiceHeader.initSabiHttpHeader(operation, params)
    }
    return this.httpServiceHeader.setHeaderOptions();
  }

  get<T>(serviceName: string, operation = '', subUrl: string, header?: string): Observable<SabiResponse<T>> {
    this.initHttpClient(serviceName)
    let headers = new HttpHeaders ({
      "Content-Type": "application/json",
      "env_header": `${header}`
    })

    let headerOpt = { headers: headers }
    return this.http.get<SabiResponse<T>>(`${this.domainUrl}/${subUrl}`, header ? headerOpt : this.initHttpHeaders(operation))
  }

  getWithParams<T>(serviceName: string, operation = '', subUrl: string, params: HttpParams): Observable<SabiResponse<T>> {
    this.initHttpClient(serviceName)
    return this.http.get<SabiResponse<T>>(`${this.domainUrl}/${subUrl}`, this.initHttpHeaders(operation, params))
  }

  getFile(serviceName: string, subUrl: string): Observable<Blob> {
    this.initHttpClient(serviceName)
    return this.http.get(`${this.domainUrl}/${subUrl}`, {responseType: 'blob'})
  }

  put<T>(serviceName: string, operation = '', subUrl: string, data?: T): Observable<SabiResponse<T>> {
    this.initHttpClient(serviceName)
    return this.http.put<SabiResponse<T>>(`${this.domainUrl}/${subUrl}`, data, this.initHttpHeaders(operation))
  }

  post<T>(serviceName: string, operation = '', subUrl: string, data: T): Observable<SabiResponse<T>> {
    this.initHttpClient(serviceName)
    return this.http.post<SabiResponse<T>>(`${this.domainUrl}/${subUrl}`, data, this.initHttpHeaders(operation))
  }

  postFile<T>(serviceName: string, operation = '', subUrl: string, data: FormData): Observable<SabiResponse<T>> {
    this.initHttpClient(serviceName)
    return this.http.post<SabiResponse<T>>(`${this.domainUrl}/${subUrl}`, data)
  }

  putFile<T>(serviceName: string, operation = '', subUrl: string, fileId: string | undefined, data: FormData): Observable<SabiResponse<T>> {
    this.initHttpClient(serviceName)
    return this.http.put<SabiResponse<T>>(`${this.domainUrl}/${subUrl}/${fileId}`, data)
  }

  delete<T>(serviceName: string, operation = '', subUrl: string): Observable<SabiResponse<T>> {
    this.initHttpClient(serviceName)
    return this.http.delete<SabiResponse<T>>(`${this.domainUrl}/${subUrl}`, this.initHttpHeaders(operation))
  }

  patch<T>(serviceName: string, operation = '', subUrl: string): Observable<SabiResponse<T>> {
    this.initHttpClient(serviceName)
    return this.http.patch<SabiResponse<T>>(`${this.domainUrl}/${subUrl}`, '', this.initHttpHeaders(operation))
  }

  patchNonAuth<T>(serviceName: string, operation = '', subUrl: string): Observable<SabiResponse<T>> {
    this.initNonAuthHttpClient(serviceName)
    return this.http.patch<SabiResponse<T>>(`${this.domainUrl}/${subUrl}`, '', this.initHttpHeaders(operation))
  }
}
