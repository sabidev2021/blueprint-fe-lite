import {Injectable} from '@angular/core';
import {createWorker} from 'tesseract.js';
import {ToastService} from "@app/shared/sabi-components/toast/toast.service";
import {OcrModel} from "@app/shared/sabi-components/ocr-uploader/models/Ocr.model";
import {LoggerStatusModel} from "@app/shared/sabi-components/ocr-uploader/models/LoggerStatus.model";
import {OCR_CONFIG} from "@core/constant";
import {Observable, of} from "rxjs";
import {FileUrlInterface} from "@app/shared/sabi-components/ocr-uploader/interfaces";
import {FileBase64Model} from "@app/module/ocr/models/File-Base64.model";
import {OcrLabelingModel} from "@app/shared/sabi-components/ocr-uploader/models/OcrLabeling.model";
import {IdentityKtpModel} from "@app/module/ocr/models";

@Injectable({
    providedIn: 'root'
})

export class OcrUploaderService {

    identityModel: IdentityKtpModel = new IdentityKtpModel();
    loggerStats = new LoggerStatusModel();

    constructor(
        private toastService: ToastService
    ) {
    }

    createFileToBase64 = (file: File[]) => new Promise<FileBase64Model>((resolve, reject) => {
        Array.from(file).forEach((file: File) => {
            const fileReader = new FileReader();
            fileReader.onload = (file: ProgressEvent<FileReader>) => {
                const formatResponse: { data: string | ArrayBuffer | null } = {
                    data: file.target!.result
                }
                resolve(<FileUrlInterface>formatResponse);
            };
            fileReader.onerror = (error: ProgressEvent<FileReader>) => reject(error);
            return fileReader.readAsDataURL(file);
        })
    })

    async traceOcrService(filePath: string) {
        try {
            const worker = await createWorker({
                logger: processing => (
                    this.watchProcessLogger(processing)
                )
            });
            await worker.loadLanguage(`${OCR_CONFIG.LANG.EN}`);
            await worker.initialize(`${OCR_CONFIG.LANG.EN}`);
            await worker.recognize(filePath);
            let data: any;
            ({data} = await worker.recognize(filePath));
            return new Promise<PromiseLike<OcrModel>>((resolve, reject) => {
                if (data.text.length > 0) {
                    resolve(data);
                    this.toastService.success('Success processing extracting data ')
                    worker.terminate();
                } else {
                    const errorMessage = new Error(`Whoops Something when wrong !`);
                    reject(errorMessage);
                }
            })
        } catch {
            this.toastService.error('Failed processing extracting data !');
            return new Error('Whoops internal server error ( 500 )');
        }
    }

    watchProcessLogger(logs: LoggerStatusModel) {
        const setlogger = new LoggerStatusModel();
        setlogger.jobId = logs.jobId;
        setlogger.workerId = logs.workerId;
        setlogger.userJobId = logs.userJobId;
        setlogger.status = logs.status;
        setlogger.progress = logs.progress;
        this.loggerStats = setlogger;
    }

    isLogger(): Observable<LoggerStatusModel> {
        return of(this.loggerStats);
    }

    isDebugWords(words: OcrModel) {
        return words
    }
}
