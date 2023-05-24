import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {UploaderDropboxService} from "@shared/sabi-components/uploader-dropbox/uploader-dropbox.service";
import {getErrMessage} from '@core/handler/sabi-error-response';
import {ToastService} from "@shared/sabi-components/toast/toast.service";
import {PICTURE_FORMAT_ALLOWED} from "@core/constant";
import {SabiResponse} from "@core/handler/sabi-response";
import {UploadFileResponse} from "@shared/sabi-components/uploader-dropbox/models/UploadFileResponse.model";

@Component({
  selector: 'app-sabi-uploader-dropbox',
  templateUrl: './sabi-uploader-dropbox.component.html',
  styleUrls: ['./sabi-uploader-dropbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SabiUploaderDropboxComponent implements OnChanges {

  @Input() imgPath = "./assets/backoffice/icon/";
  @Input() imgName = "general/unggah.svg";
  @Input() title!: string;
  @Input() uploadUrl!: string;
  @Input() updateUrl!: string;
  @Input() deleteUrl!: string;
  @Input() accept!: string;
  @Input() serviceName!: string;
  @Input() filePath!: string;
  @Input() imgWidth = 100;
  @Input() imgHeight = 100;
  @Input() closeBtnTop = -105;
  @Input() versioning!: boolean;

  @Output() onClear: EventEmitter<void> = new EventEmitter();
  @Output() onChange: EventEmitter<void> = new EventEmitter();
  @Output() onFinishUpload: EventEmitter<string> = new EventEmitter();
  @Output() onErrorUpload: EventEmitter<string> = new EventEmitter();

  files: File[] = [];
  retrievedImage = "";
  spinner = false;
  imageId!: string;
  errorMessage = false;
  errorTypeMessage!: string;

  constructor(
    private toast: ToastService,
    private fileService: UploaderDropboxService
  ) {
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    this.retrievedImage = this.isVersioningFile(this.filePath)
  }

  async onSelectFile(event: any) {
    this.files.push(...event.addedFiles);
    this.checkValidFormatFiles(event)

    const formData = new FormData();
    this.files.forEach((value: any) => {
      formData.set('file', value);
    });

    if (!this.checkHaveFileId()) {
      await this.postUploaderServices(formData)
    } else {
      await this.updateUploaderServices(formData)
      if (this.deleteUrl == 'disabled') {
        this.clearFileData()
      }
    }
  }

  async postUploaderServices(multipartFormData: FormData) {
    this.spinner = true;
    await this.fileService.uploadService(this.serviceName, this.uploadUrl, multipartFormData).subscribe({
      next: (result: SabiResponse<UploadFileResponse>) => {
        if (result.code == 201) {
          const data = result.data;
          this.onFinishUpload.emit(data?.fileId)
          this.imageId = <string>data?.fileId
          this.retrievedImage = `data:${result.data?.fileType};base64,` + result.data?.fileData;
          this.spinner = false;
          this.errorMessage = false;
        }
      },
      error: (err: HttpErrorResponse) => {
        console.error(getErrMessage(err))
        this.onErrorUpload.emit(this.parsingErrorMessages(err))
        this.spinner = false;
        this.errorMessage = true;
        this.clearFileData()
      },
      complete: () => {
        this.spinner = false;
      }
    });
  }

  async updateUploaderServices(multipartFormData: FormData) {
    this.spinner = true;
    await this.fileService.updateService(this.serviceName, this.updateUrl, this.imageId, multipartFormData).subscribe({
      next: (result: SabiResponse<UploadFileResponse>) => {
        if (result.code == 200) {
          const data = result.data;
          this.onFinishUpload.emit(data?.fileId)
          this.imageId = <string>data?.fileId
          this.retrievedImage = `data:${result.data?.fileType};base64,` + result.data?.fileData;
          this.spinner = false;
          this.errorMessage = false;
        }
      },
      error: (err: HttpErrorResponse) => {
        console.error(getErrMessage(err))
        this.onErrorUpload.emit(this.parsingErrorMessages(err))
        this.spinner = false;
        this.errorMessage = true;
        this.clearFileData()
      },
      complete: () => {
        this.spinner = false;
      }
    });
  }

  deleteUploaderServices() {
    this.spinner = true;
    this.fileService.deleteService(this.serviceName, this.deleteUrl, this.imageId).subscribe({
      next: (result: SabiResponse<UploadFileResponse>) => {
        if (result.code == 200) {
          this.onClear.emit()
          this.imageId = "";
          this.spinner = false;
        }
      },
      error: (err: HttpErrorResponse) => {
        console.error(getErrMessage(err));
        this.onErrorUpload.emit(this.parsingErrorMessages(err))
        this.spinner = false;
      },
      complete: () => {
        this.spinner = false;
      }
    });

  }

  onRemoveFile() {
    this.deleteUploaderServices()
    this.clearFileData();
  }

  clearFileData() {
    while (this.files.length) {
      this.files.pop();
    }
    this.retrievedImage = "";
    if (this.deleteUrl != 'disabled') {
      this.imageId = "";
      this.onClear.emit()
    }
  }

  checkHaveFileId(): boolean {
    if (this.imageId != undefined) {
      return this.imageId.length > 0
    }
    return false
  }

  parsingErrorMessages(err: HttpErrorResponse) {
    if (this.errorTypeMessage?.length > 0) {
      return this.errorTypeMessage
    }
    return JSON.parse(err.error).message
  }

  checkValidFormatFiles(files: any) {
    if (files.rejectedFiles.length > 0) {
      const fileType = files.rejectedFiles[0].type;
      if (fileType != PICTURE_FORMAT_ALLOWED.PNG || fileType != PICTURE_FORMAT_ALLOWED.JPG || fileType != PICTURE_FORMAT_ALLOWED.JPEG) {
        this.errorTypeMessage = PICTURE_FORMAT_ALLOWED.MESSAGES
      }
    }
  }

  isVersioningFile(fileUri: string) {
    if (fileUri != null) {
      if (fileUri.length > 0) {
        if (this.versioning) {
          return `${fileUri}?ver=${Math.random()}`
        }
        return fileUri
      }
    }
    return fileUri
  }

  get isPreviewFiles() {
    if (this.retrievedImage != null || this.retrievedImage != undefined) {
      return this.retrievedImage?.length > 0;
    } else {
      return false
    }
  }

  get isShowCloseAction() {
    if (this.deleteUrl == 'disabled') {
      return false
    }
    return this.files.length > 0
  }

}
