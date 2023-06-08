import {Injectable} from '@angular/core';
import {HttpClientService} from "@core/http/http-client.service";
import {UploadFile} from "@app/shared/sabi-components/uploader-file/models/UploadFile.model";
import {HTTP_CONTENT_TYPE} from "@core/constant";
import {Legal} from "@app/shared/sabi-components/uploader-file/models/legal.model";

@Injectable({
  providedIn: 'root'
})
export class UploaderFileService {

  constructor(
    private httpClient: HttpClientService
  ) {
  }

  uploadService(serviceName: string, apiUrl: string, data: FormData) {
    return this.httpClient.postFile<UploadFile>(serviceName, `upload-file-${serviceName}:${HTTP_CONTENT_TYPE.MULTI_PART}`, apiUrl, data)
  }

  updateService(serviceName: string, apiUrl: string, fileId: string | undefined, data: FormData) {
    return this.httpClient.putFile<UploadFile>(serviceName, `update-file-${serviceName}:${HTTP_CONTENT_TYPE.MULTI_PART}`, apiUrl, fileId, data)
  }

  deleteService(serviceName: string, apiUri: string, fileId: string | undefined) {
    return this.httpClient.delete<UploadFile>(serviceName, `delete-file-${serviceName}`, `${apiUri}/${fileId}`)
  }

  deleteOssService(serviceName: string, apiUri: string, paramId: string | number) {
    return this.httpClient.delete<Legal>(serviceName, `delete-file-oss-${serviceName}`, `${apiUri}/${paramId}`)
  }

  downloadService(serviceName: string, apiUri: string, fileDocType: string) {
      return this.httpClient.get<Blob>(serviceName, `download-files-${serviceName}`, `${apiUri}/${fileDocType}`)
  }

}
