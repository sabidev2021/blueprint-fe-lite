import {Injectable} from '@angular/core';
import {HttpClientService} from '@core/http/http-client.service';
import {UploadFileResponse} from "@app/shared/sabi-components/uploader-dropbox/models/UploadFileResponse.model";
import {HTTP_CONTENT_TYPE} from "@core/constant";

@Injectable({
  providedIn: 'root'
})

export class UploaderDropboxService {

  constructor(
    private httpClient: HttpClientService
  ) {
  }

  public uploadService(serviceName: string, apiUri: string, data: FormData) {
    return this.httpClient.postFile<UploadFileResponse>(serviceName, `upload-logo-${serviceName}:${HTTP_CONTENT_TYPE.MULTI_PART}`, apiUri, data)
  }

  public updateService(serviceName: string, apiUri: string, fileId: string, data: FormData) {
    return this.httpClient.putFile<UploadFileResponse>(serviceName, `update-logo-${serviceName}:${HTTP_CONTENT_TYPE.MULTI_PART}`, apiUri, fileId, data)
  }

  public deleteService(serviceName: string, apiUri: string, fileId: string) {
    return this.httpClient.delete<UploadFileResponse>(serviceName, `delete-logo-${serviceName}`, `${apiUri}?fileId=${fileId}`)
  }
}
