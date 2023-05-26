import {HttpClientService} from "@core/http/http-client.service";
import {PagingData} from "@core/base/pagingData";
import {DbLocalService} from "@core/dblocal/db-local.service";
import {HttpParams} from "@angular/common/http";

export class SabiBaseService<T> {
  protected readonly serviceName: string;
  protected readonly moduleName: string;

  constructor(serviceName: string, moduleName: string, protected httpClient: HttpClientService, protected db: DbLocalService) {
    this.serviceName = serviceName;
    this.moduleName = moduleName;
  }

  httpGetList(functionUrl = ``) {
    return this.httpClient.get<T[]>(this.serviceName, `fetch-${this.moduleName}-list`, `${this.moduleName}/${functionUrl}`);
  }

  httpGetListY<Y>(functionUrl = ``) {
    return this.httpClient.get<Y[]>(this.serviceName, `fetch-${this.moduleName}-list`, `${this.moduleName}/${functionUrl}`);
  }

  getList() {
    return this.httpGetList();
  }

  httpGetPage(page = 0, limit = 4, keyword = '') {
    return this.httpClient.get<PagingData<T>>(this.serviceName, `fetch-${this.moduleName}-page`, `${this.moduleName}/${page}/${limit}?keyword=${keyword}`);
  }

  getPage(keyword: string, limit: number, page: number) {
    return this.httpGetPage(page, limit, keyword)
  }

  httpGet(functionUrl = ``) {
    return this.httpClient.get<T>(this.serviceName, `fetch-${this.moduleName}`, `${this.moduleName}/${functionUrl}`)
  }

  httpGetY<Y>(functionUrl = ``) {
    return this.httpClient.get<Y>(this.serviceName, `fetch-${this.moduleName}`, `${this.moduleName}/${functionUrl}`)
  }

  httpGetYWithParams<Y>(functionUrl = ``, params: HttpParams) {
    return this.httpClient.getWithParams<Y>(this.serviceName, `fetch-${this.moduleName}`, `${this.moduleName}/${functionUrl}`, params)
  }

  get(id: number) {
    return this.httpGet(`${id}`)
  }

  httpDelete(functionUrl = ``) {
    return this.httpClient.delete(this.serviceName, `delete-${this.moduleName}`, `${this.moduleName}/${functionUrl}`)
  }

  delete(id: number) {
    return this.httpDelete(`${id}`)
  }

  httpPost(functionUrl = ``, data: T) {
    return this.httpClient.post<T>(this.serviceName, `save-${this.moduleName}`, `${this.moduleName}/${functionUrl}`, data);
  }

  save(data: T) {
    return this.httpPost('', data)
  }

  httpPut(functionUrl = ``, data: T) {
    return this.httpClient.put<T>(this.serviceName, `update-${this.moduleName}`, `${this.moduleName}/${functionUrl}`, data);
  }

  update(id: number, data: T) {
    return this.httpPut(`${id}`, data)
  }

  httpPatch(functionUrl = ``) {
    return this.httpClient.patch<T>(this.serviceName, `update-${this.moduleName}`, `${this.moduleName}/${functionUrl}`);
  }

  patch(id: number) {
    return this.httpPatch(`${id}`)
  }


}
