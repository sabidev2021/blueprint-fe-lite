import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';
import {ToastService} from "@shared/../../toast/toast.service";
import {HttpErrorResponse} from "@angular/common/http";
import {getErrMessage} from "@core/handler/sabi-error-response";
import {UploaderFileService} from "@app/shared/sabi-components/uploader-file/uploader-file.service";
import {SabiResponse} from "@core/handler/sabi-response";
import {UploadFile} from "@app/shared/sabi-components/uploader-file/models/UploadFile.model";
import {PICTURE_FORMAT_ALLOWED} from "@core/constant";
import {Legal} from "@app/module/manage-profile/models/legal";
import {saveAs} from "file-saver";

export interface FinishUploaded {
    filedId: string;
    indexInput: number;
    nameInput: string;
}

export interface ErrorUploaded {
    indexInput: number;
    messages: string;
}

@Component({
    selector: 'app-sabi-uploader-file',
    templateUrl: './sabi-uploader-file.component.html',
    styleUrls: ['./sabi-uploader-file.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SabiUploaderFileComponent implements OnChanges {

    @Input() title!: string;
    @Input() serviceName!: string;
    @Input() uploadUrl!: string;
    @Input() updateUrl!: string;
    @Input() deleteUrl!: string;
    @Input() deleteOssUrl!: string;
    @Input() downloadUrl!: string;
    @Input() inputIndex = 0;
    @Input() inputName = 'file-transfer'
    @Input() docType!: string
    @Input() accept!: string;
    @Input() filePath!: string;
    @Input() fileMappingId!: number;
    @Input() featureDownload!: boolean;

    @Output() onFinishUpload: EventEmitter<FinishUploaded> = new EventEmitter<FinishUploaded>();
    @Output() onErrorUpload: EventEmitter<ErrorUploaded> = new EventEmitter<ErrorUploaded>();

    files: File[] = [];
    uploadIcon = `./assets/backoffice/icon/general/cloud.svg`;
    fileIcon = `./assets/backoffice/icon/general`;
    private imageId: string | undefined;
    private base64Data: string | undefined;
    retrievedImage: string | undefined;
    errorTypeMessage!: string;
    errorMessages = false;
    loader = false;
    fileType = '';
    downloaderFeature = true;

    constructor(
        private el: ElementRef,
        private toast: ToastService,
        private uploader: UploaderFileService,
    ) {
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ngOnChanges(changes: SimpleChanges) {
        this.retrievedImage = this.filePath
    }

    onTriggerInput() {
        const hostElem = this.el.nativeElement;
        hostElem.querySelector(`input[name='${this.inputName + '-' + this.inputIndex}']`).click();
    }

    onSelectFile(event: any) {
        this.loader = true
        this.files.push(...event.target.files);
        const formData = new FormData();
        this.files.forEach((value: File) => {
            formData.set('file', value);
        });

        if (!this.isCheckHaveFileId()) {
            this.uploadFiles(formData)
        } else {
            this.updateFiles(formData)
        }
    }

    onRemoveFile() {
        while (this.files.length) {
            this.files.pop();
        }
        this.retrievedImage = "";
        this.downloaderFeature = false
        if (this.isCheckHaveFileId() && this.deleteUrl?.length > 0) {
            this.deleteFiles()
        } else if (this.deleteOssUrl != undefined && this.deleteOssUrl.length > 0) {
            this.deleteOssfiles()
        }
    }

    uploadFiles(formData: FormData) {
        this.uploader.uploadService(this.serviceName, this.uploadUrl, formData).subscribe({
            next: (result: SabiResponse<UploadFile>) => {
                if (result.code == 201 && result.data != undefined) {
                    const data = result.data;
                    this.imageId = data.fileId
                    this.base64Data = result.data.fileData;
                    this.retrievedImage = `data:${result.data.fileType};base64,` + this.base64Data;
                    this.onFinishUpload.emit({
                        filedId: data.fileId,
                        indexInput: this.inputIndex,
                        nameInput: this.inputName,
                    })
                    this.errorMessages = false
                    this.isStopLoader()
                }
            },
            error: (err: HttpErrorResponse) => {
                this.errorServices(err)
            }
        });
    }

    updateFiles(formData: FormData) {
        return this.uploader.updateService(this.serviceName, this.updateUrl, this.imageId, formData).subscribe({
            next: (result: SabiResponse<UploadFile>) => {
                if (result.code == 200 && result.data != undefined) {
                    this.imageId = result.data.fileId
                    this.base64Data = result.data.fileData;
                    this.retrievedImage = `data:${result.data.fileType};base64,` + this.base64Data;
                    this.onFinishUpload.emit({
                        filedId: result.data.fileId,
                        indexInput: this.inputIndex,
                        nameInput: this.inputName,
                    })
                    this.errorMessages = false
                    this.isStopLoader()
                }
            },
            error: (err: HttpErrorResponse) => {
                this.errorServices(err)
            },
            complete: () => {
                this.isStopLoader()
            }
        })
    }

    deleteFiles() {
        return this.uploader.deleteService(this.serviceName, this.deleteUrl, this.imageId).subscribe({
            next: (result: SabiResponse<UploadFile>) => {
                if (result.code == 200 && result.data != undefined) {
                    this.errorMessages = false
                    this.imageId = "";
                    this.isStopLoader()
                }
            },
            error: (err: HttpErrorResponse) => {
                this.errorServices(err)
            }
        })
    }

    deleteOssfiles() {
        return this.uploader.deleteOssService(this.serviceName, this.deleteOssUrl, this.docType != undefined ? this.docType : this.fileMappingId).subscribe({
            next: (result: SabiResponse<Legal>) => {
                if (result.code == 200 && result.data != undefined) {
                    this.toast.resultSucces(`berhasil menghapus dokumen ${this.docType || 'KTP'}!`)
                }
            },
            error: (err: HttpErrorResponse) => {
                this.errorServices(err)
            }
        })
    }

    onDownloadFile() {
        return this.uploader.downloadService(this.serviceName, this.downloadUrl, this.docType).subscribe({
            next: (result: SabiResponse<Blob>) => {
                if (result?.code == 200 && result.data != undefined) {
                    saveAs(result.data)
                }
            },
            error: (err: HttpErrorResponse) => {
                this.errorServices(err)
            }
        })
    }

    parsingErrorMessages(err: HttpErrorResponse) {
        if (this.errorTypeMessage?.length > 0) {
            return this.errorTypeMessage
        }
        return JSON.parse(err.error).message
    }

    private errorServices(err: HttpErrorResponse) {
        console.error(getErrMessage(err))
        this.isStopLoader()
        this.errorMessages = true
        this.onErrorUpload.emit({
            indexInput: this.inputIndex,
            messages: this.parsingErrorMessages(err)
        })
    }

    renderIconExtension(pathFile: string) {
        const arrayFileType = this.accept.split(',');
        let iconExtensionFile: string | undefined = '';
        arrayFileType.forEach((value: string) => {
            if (PICTURE_FORMAT_ALLOWED.PDF !== value) {
                return iconExtensionFile = this.retrievedImage
            } else {
                return iconExtensionFile = `${pathFile}/pdf.png`
            }
        })
        return iconExtensionFile
    }

    isCheckHaveFileId() {
        if (this.imageId != undefined) {
            return this.imageId?.length > 0
        }
        return false
    }

    isStopLoader() {
        setTimeout(() => {
            this.loader = false
            this.downloaderFeature = true
        }, 1500)
    }

    get isDeleteAction() {
        if (this.retrievedImage != undefined && !this.loader) {
            return this.retrievedImage?.length > 0
        }
        return false
    }

    get isRenderErorrAndLoading() {
        if (this.loader) {
            return 'button__file-preloader'
        }
        if (this.errorMessages) {
            return 'button__sabi-file-transfer' + ' ' + 'is-have__error'
        }
        return 'button__sabi-file-transfer'
    }

    get isRenderHeadingFileTransfer() {
        if (this.retrievedImage) {
            return 'heading-uploader'
        }
        if (this.errorMessages) {
            return 'heading-uploader__extension' + ' ' + 'is-have__error'
        }
        return 'heading-uploader__extension'
    }

    get isDisableDownloader() {
        if (this.filePath != undefined) {
            return this.filePath.length > 0 && this.downloaderFeature && !this.featureDownload
        }
        return false
    }

    get renderContentClass() {
        if (this.filePath != null && this.downloaderFeature) {
            return 'd-inline-flex'
        }
        return 'sabi-content-file-transfer'
    }
}
