import {Injectable} from '@angular/core';
import {createWorker} from 'tesseract.js';
import {ToastService} from "@app/shared/sabi-components/toast/toast.service";
import {OcrModel} from "@app/shared/sabi-components/ocr-uploader/models/Ocr.model";
import {LoggerStatusModel} from "@app/shared/sabi-components/ocr-uploader/models/LoggerStatus.model";
import {OCR_CONFIG} from "@core/constant";
import {Observable, of} from "rxjs";
import {FileUrlInterface} from "@app/shared/sabi-components/ocr-uploader/interfaces";
import {OcrLinesModel} from "@app/shared/sabi-components/ocr-uploader/models/OcrLines.model";
import {FileBase64Model} from "@app/module/ocr/models/File-Base64.model";
import {OcrLabelingService} from "@app/shared/sabi-components/ocr-uploader/services/ocr-labeling.service";

@Injectable({
    providedIn: 'root'
})

export class OcrUploaderService {
    loggerStats = new LoggerStatusModel();

    constructor(
        private toastService: ToastService,
        private ocrLabelService: OcrLabelingService
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
            this.toastService.success('Success processing extracting data ')
            await worker.terminate();
            return new Promise<PromiseLike<OcrModel>>((resolve, reject) => {
                if (data.text.length > 0) {
                    this.labelClassification(data)
                    resolve(data);
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

    labelClassification(label: OcrModel) {
        label.lines.forEach((lineVal: OcrLinesModel, index: number) => {
            // console.log(index)
            // console.log(lineVal)
            this.ocrLabelService.labelingHeader(index, lineVal)
            this.ocrLabelService.labelingHeaderSub(index, lineVal)
            this.ocrLabelService.labelingNik(index, lineVal)
            this.ocrLabelService.labelNames(index, lineVal)
            this.ocrLabelService.labelBirthPlaceAndDate(index, lineVal)
            this.ocrLabelService.labelBirthPlace(index, lineVal)
            this.ocrLabelService.labelBirthDate(index, lineVal)
            this.ocrLabelService.labelBloodType(index, lineVal)
            this.ocrLabelService.labelGenderType(index, lineVal)
            this.ocrLabelService.labelAddress(index, lineVal)
            this.ocrLabelService.labelRTRW(index, lineVal)
            this.ocrLabelService.labelRT(index, lineVal)
            this.ocrLabelService.labelRW(index, lineVal)
            this.ocrLabelService.labelVillage(index, lineVal)
            this.ocrLabelService.labelSubDistrict(index, lineVal)
            this.ocrLabelService.labelReligion(index, lineVal)
            this.ocrLabelService.labelMartialStatus(index, lineVal)
            this.ocrLabelService.labelWork(index, lineVal)
            this.ocrLabelService.labelNationaly(index, lineVal)
            this.ocrLabelService.labelValidUntil(index, lineVal)
        })
    }

}
