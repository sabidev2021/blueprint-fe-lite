import {AfterViewInit, Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {DbIndexService} from "@core/dbIndex/db-index.service";
import {DomSanitizer} from "@angular/platform-browser";
import {DbLocalService} from "@core/dblocal/db-local.service";
import {CONFIG_FILE_MESSAGES, PICTURE_FORMAT_ALLOWED} from "@core/constant";
import {FinishUploadedInterface} from "@app/shared/sabi-components/ocr-uploader/interfaces/FinishUploaded.interface";
import {ErrorUploadedInterface} from "@app/shared/sabi-components/ocr-uploader/interfaces/ErrorUploaded.interface";
import {ToastService} from "@app/shared/sabi-components/toast/toast.service";

@Component({
    selector: 'app-sabi-ocr-uploader',
    templateUrl: './sabi-ocr-uploader.component.html',
    styleUrls: ['./sabi-ocr-uploader.component.scss'],
})

export class SabiOcrUploaderComponent implements AfterViewInit {

    @Input() imgPath = "./assets/icon/";
    @Input() imgName = "general/unggah.svg";
    @Input() title = "Unggah Gambar";
    @Input() accept = "*";
    @Input() serviceName!: string;
    @Input() filePath!: string;
    @Input() imgWidth = 'auto';
    @Input() imgHeight = 'auto';
    @Input() closeBtnTop = -105;
    @Input() versioning = true;
    @Input() prefixFile = "";

    private files: File[] = [];
    private _changes!: SimpleChanges;
    retrievedImage = '';
    spinner = false;
    errorMessage = false;

    @Output() onAttachFile: EventEmitter<File[]> = new EventEmitter();
    @Output() onClear: EventEmitter<void> = new EventEmitter();
    @Output() onChange: EventEmitter<void> = new EventEmitter();
    @Output() onFinishUpload: EventEmitter<FinishUploadedInterface> = new EventEmitter<FinishUploadedInterface>();
    @Output() onErrorUpload: EventEmitter<ErrorUploadedInterface> = new EventEmitter<ErrorUploadedInterface>();

    constructor(
        private toastService: ToastService,
        private idbService: DbIndexService,
        private dbLocalService: DbLocalService,
        private sanitizer: DomSanitizer,
    ) {
    }

    ngAfterViewInit() {
        this.initIDB()
        console.log(this.filePath)
    }

    ngOnChanges(changes: SimpleChanges) {
        this._changes = changes;
        this.retrievedImage = this.isVersioningFile(this.filePath, false)
    }

    ngOnDestroy() {
        this.deleteIdb(this.generateKeyStore())
    }

    private initIDB() {
        this.idbService.initConfigDb(`db-${this.serviceName}`, `${this.serviceName}`)
    }

    private generateKeyStore() {
        return `key-${this.serviceName}`;
    }

    onAttachFiles(files: File[]) {
        this.onAttachFile.emit(files);
    }

    async onSelectFile(event: { addedFiles: any; }) {
        this.deleteIdb(this.generateKeyStore())
        this.files.push(...event.addedFiles);
        const modifyArray: File[] = [];
        this.files.forEach((value: File) => {
            modifyArray.push(new File([value], `${this.prefixFile.length > 0 ? `${this.prefixFile}-${value.name}` : value.name}`, {
                type: `${value.type}`
            }))
        })
        this.onAttachFiles(this.files)
        await this.saveIdb(this.generateKeyStore(), modifyArray)
    }

    private getIdb() {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(new Blob(this.files));
        fileReader.onload = () => {
            this.retrievedImage = <string>this.sanitaziSecurityImages(fileReader.result)
        }
    }

    async saveIdb(key: string, data: File[]) {
        try {
            this.spinner = true;
            this.isValidateFilesIdb(key, data)
        } catch (err) {
            console.error(err);
        }
    }

    private deleteIdb(key: string) {
        try {
            this.clearFileIdb()
            this.dbLocalService.remove(key);
            this.idbService.deleteRows(`${key}`, `${this.serviceName}`).then(r => r);
        } catch (err) {
            console.error(err);
        }
    }

    private clearFileIdb() {
        this.spinner = false;
        while (this.files.length) {
            this.files.pop();
            this.retrievedImage = "";
            this.deleteIdb(this.generateKeyStore());
        }
        this.onClear.emit()
    }

    private isValidateFilesIdb(key: string, files: File[]) {
        const maxSizeFiles = 2000000;
        const sanitaziArr: File[] = [];
        files.forEach((value: File) => {
            if (value.size > maxSizeFiles) {
                this.errorMessage = !this.errorMessage
                this.files = [];
                this.onErrorUpload.emit({
                    messages: CONFIG_FILE_MESSAGES.TYPE.PICTURE.ALLOWED.MAXSIZE,
                    errorMessage: !this.errorMessage
                });
            } else {
                switch (value.type) {
                    case PICTURE_FORMAT_ALLOWED.JPEG :
                        sanitaziArr.push(value);
                        break;
                    case PICTURE_FORMAT_ALLOWED.JPG :
                        sanitaziArr.push(value);
                        break;
                    case PICTURE_FORMAT_ALLOWED.PNG:
                        sanitaziArr.push(value);
                        break;
                    default :
                        this.errorMessage = !this.errorMessage
                        this.files = [];
                        this.deleteIdb(this.generateKeyStore())
                        this.onErrorUpload.emit({
                            messages: CONFIG_FILE_MESSAGES.TYPE.PICTURE.ALLOWED.MESSAGES,
                            errorMessage: !this.errorMessage
                        });
                        break;
                }
            }
        })
        if (sanitaziArr.length > 1) {
            this.spinner = false;
            this.retrievedImage = "";
        }
        this.saveValidFiles(key, sanitaziArr)
    }

    private saveValidFiles(key: string, file: File[]) {
        if (this.files.length > 1) {
            this.updateObjectStorages(key).then(r => r)
        } else {
            this.idbService.addRows(`${key}`, `${this.serviceName}`, file).then((result: any) => {
                if (result.status === 201) {
                    this.spinner = result.spinner
                    this.getIdb()
                    this.onFinishUpload.emit({
                        data: file,
                        errorMessage: false
                    });
                }
            });
        }
    }

    private async updateObjectStorages(key: string) {
        await this.idbService.updateRows(key, this.serviceName, this.files).then((result) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (result.status === 200) {
                this.spinner = false;
            }
        });
    }


    private isVersioningFile(fileUri: string, isActive: boolean) {
        if (isActive) {
            if (fileUri != null) {
                if (fileUri.length > 0) {
                    if (this.versioning) {
                        return `${fileUri}?ver=${Math.random()}`
                    }
                    return fileUri
                }
            }
        }
        return fileUri
    }

    private sanitaziSecurityImages(base64Image: string | ArrayBuffer | null) {
        if (base64Image === 'data:') {
            return '';
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(<string>base64Image);
    }

    onRemoveFile() {
        this.clearFileIdb();
    }

    get isPreviewFiles() {
        if (this.retrievedImage != null || this.retrievedImage != undefined) {
            return this.retrievedImage
        } else {
            return false
        }
    }

    get isShowCloseAction() {
        return this.files.length > 0
    }

}
