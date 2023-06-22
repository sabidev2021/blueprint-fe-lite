import {Injectable} from '@angular/core';
import {createWorker} from 'tesseract.js';
import {ToastService} from "@app/shared/sabi-components/toast/toast.service";
import {OcrModel} from "@app/shared/sabi-components/ocr-uploader/models/Ocr.model";
import {LoggerStatusModel} from "@app/shared/sabi-components/ocr-uploader/models/LoggerStatus.model";
import {OCR_CONFIG} from "@core/constant";
import {BehaviorSubject, Observable, of} from "rxjs";
import {FileUrlInterface} from "@app/shared/sabi-components/ocr-uploader/interfaces";
import {OcrLinesModel} from "@app/shared/sabi-components/ocr-uploader/models/OcrLines.model";
import {FileBase64Model} from "@app/module/ocr/models/File-Base64.model";
import {OcrLabelingService} from "@app/shared/sabi-components/ocr-uploader/services/ocr-labeling.service";
import {OcrLabelingModel} from "@app/shared/sabi-components/ocr-uploader/models/OcrLabeling.model";

@Injectable({
    providedIn: 'root'
})

export class OcrUploaderService {

    loggerStats = new LoggerStatusModel();
    _groupLabelClassification: BehaviorSubject<Array<OcrLabelingModel>> = new BehaviorSubject<Array<OcrLabelingModel>>([]);
    _labelClassification: OcrLabelingModel = new OcrLabelingModel();

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
            await this.labelClassification(data)
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

    labelClassification(label: OcrModel) {
        label.lines.forEach((lineVal: OcrLinesModel, index: number) => {
            this.ocrLabelService.labelingHeader(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelingHeaderSub(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelingNik(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelNames(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelBirthPlaceAndDate(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelBirthPlace(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelBirthDate(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelBloodType(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelGenderType(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelAddress(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelRTRW(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelRT(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelRW(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelVillage(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelSubDistrict(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelReligion(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelMartialStatus(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelWork(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelNationaly(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
            this.ocrLabelService.labelValidUntil(index, lineVal).subscribe({
                next(result: OcrLabelingModel) {
                    console.log(result);
                },
                error(err) {
                    console.error('something wrong occurred: ' + err);
                },
            })
        })
    }

}
