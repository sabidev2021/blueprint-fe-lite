import {Component} from '@angular/core';
import {LoggerStatusModel} from "@app/shared/sabi-components/ocr-uploader/model/LoggerStatus.model";
import {Observable, of} from "rxjs";
import {OcrUploaderService} from "@app/shared/sabi-components/ocr-uploader/ocr-uploader.service";
import {ToastService} from "@app/shared/sabi-components/toast/toast.service";
import {ErrorUploadedModel} from "@app/shared/sabi-components/ocr-uploader/model/ErrorUploaded.model";
import {FinishUploadedModel} from "@app/shared/sabi-components/ocr-uploader/model/FinishUploaded.model";
import {OcrWordsModel} from "@app/shared/sabi-components/ocr-uploader/model/OcrWords.model";
import {OcrModel} from "@app/shared/sabi-components/ocr-uploader/model/Ocr.model";
import {OcrLinesModel} from "@app/shared/sabi-components/ocr-uploader/model/OcrLines.model";

@Component({
    selector: 'app-sabi-ocr',
    templateUrl: './sabi-ocr.component.html',
    styleUrls: ['./sabi-ocr.component.scss']
})
export class SabiOcrComponent {
    uploadedFiles: File[] = [];
    serviceName: string = 'sabi-ocr-service';
    resultText!: string;
    blobUrl: string = '';
    loggerStats: LoggerStatusModel = new LoggerStatusModel();
    isLoading: boolean = false;
    isSubmited: boolean = false;
    isValidKtp: boolean = true;
    nik!: string;
    name!: string;
    birth_date!: string;
    gender!: string;
    rt_rw!: string;
    village!: string;
    subdistrict!: string;
    religion!: string;
    martial_status!: string;
    work!: string;
    citizenship!: string;
    valid_until!: string;
    blood_type!: string;

    constructor(
        private toastService: ToastService,
        private ocrService: OcrUploaderService
    ) {
        this.ocrService.isLogger()
            .subscribe((value: LoggerStatusModel) => console.info(value));
    }

    public configStage: Observable<any> = of({
        width: 200,
        height: 200
    });

    public configCircle: Observable<any> = of({
        x: 100,
        y: 100,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
    });

    onLogoUploadFinish(event: FinishUploadedModel) {
        this.uploadedFiles = event.data
        if (event.data.length > 0) {
            this.isSubmited = false;
            this.toastService.success('Success upload a file KTP')
        }
    }

    onErrorUploadFinish(event: ErrorUploadedModel) {
        this.toastService.error(`Whoops format file not valid ${event}`)
    }

    onUploadClear() {
        this.resultText = "";
        this.uploadedFiles = [];
        this.clearOcrResult()
    }

    onConvertFile(): void {
        this.isSubmited = true;
        if (this.uploadedFiles.length > 0) {
            this.ocrService.createFileToBlob(this.uploadedFiles)
                .then((result: (Awaited<PromiseLike<any>>)) => {
                    this.blobUrl = result[0].data
                    this.onSubmitOcr()
                }).catch((err) => {
                    console.error(err)
                }
            )
        } else {
            this.toastService.error('Whoops please attach some files first when wrong !')
        }
    }

    onSubmitOcr() {
        this.isLoading = true;
        try {
            this.ocrService.traceOcrService(`${this.blobUrl}`)
                .then((result: OcrModel | any) => {
                    this.isValidateIdentity(result)
                    this.mappingDataExtracted(result)
                    this.isLoading = false;
                    this.isSubmited = false;
                }).catch((err) => {
                console.error(err)
                this.isLoading = false
                this.toastService.error(`${err}`)
            });
        } catch (err) {
            this.toastService.error('Whoops something when wrong !')
        }
    }

    isValidateIdentity(value: OcrWordsModel) {
        [value].some((item: OcrWordsModel) => {
            for (let key in item) {
                this.isValidKtp = item.text.includes('NIK');
            }
        });
        if (!this.isValidKtp) {
            this.isValidKtp = false;
            this.onUploadClear()
            setTimeout(() => {
                this.toastService.error('Whoops your file is not valid KTP !')
            }, 3000)
        }
    }

    mappingDataExtracted(value: OcrModel) {
        console.log(value.lines)
        value.lines.forEach((value: OcrLinesModel) => {
            this.groupNik(value)
            this.groupName(value)
            this.groupBirthDate(value)
            this.groupGender(value)
            this.groupBloodType(value)
            this.groupRtRw(value)
            this.groupVillage(value)
            this.groupReligion(value)
            this.groupSubdistrict(value)
            this.groupMartialStatus(value)
            this.groupWork(value)
            this.groupCitizenship(value)
            this.groupValidUntil(value)
        })
    }

    groupNik(words: OcrLinesModel) {
        if (words.text.includes('NIK')) {
            const sanitazi = this.sanitaziWords('nik', words, ':', 1)
            if (sanitazi !== undefined ? sanitazi.length > 0 : false) {
                this.nik = sanitazi.replace('-,\n', '')
            } else {
                this.nik = '-';
            }
        }
    }

    groupName(words: OcrLinesModel) {
        if (words.text.includes('Nama')) {
            const sanitazi = this.sanitaziWords('name', words, ':', 1)
            if (sanitazi !== undefined ? sanitazi.length > 0 : false) {
                this.name = sanitazi.replace('-,\n', '')
            } else {
                this.name = '-';
            }
        }
    }

    groupBirthDate(words: OcrLinesModel) {
        if (words.text.includes('Tempat')) {
            const sanitazi = this.sanitaziWords('birth_date', words, ':', 1)
            if (sanitazi !== undefined ? sanitazi.length > 0 : false) {
                this.birth_date = sanitazi.replace('-,\n', '')
            } else {
                this.birth_date = '-';
            }
        }
    }

    groupGender(words: OcrLinesModel) {
        if (words.text.includes('Jenis')) {
            const sanitazi = this.sanitaziWords('gender', words, ':', 1)
            if (sanitazi !== undefined ? sanitazi.length > 0 : false) {
                if (sanitazi.includes('Gol')) {
                    this.gender = sanitazi.replace('Gol', '')
                } else if (sanitazi.includes('. Darah')) {
                    this.gender = sanitazi.replace('. Darah', '')
                } else {
                    this.gender = sanitazi
                }
            } else {
                this.gender = '-';
            }
        }
    }

    groupBloodType(words: OcrLinesModel) {
        if (words.text.includes('Gol')) {
            const sanitazi = this.sanitaziWords('blood_type', words, ':', 3)
            if (sanitazi !== undefined ? sanitazi.length > 0 : false) {
                if (sanitazi.includes('—')) {
                    this.blood_type = sanitazi.replace('—', '')
                } else {
                    this.blood_type = sanitazi
                }
            } else {
                this.blood_type = '-';
            }
        }
    }

    groupRtRw(words: OcrLinesModel) {
        if (words.text.includes('RT/RW')) {
            const sanitazi = this.sanitaziWords('rt_rw', words, ':', 1)
            if (sanitazi !== undefined ? sanitazi.length > 0 : false) {
                if (sanitazi.includes('="')) {
                    this.rt_rw = sanitazi.replace('="', '')
                } else {
                    this.rt_rw = sanitazi
                }
            } else {
                this.rt_rw = '-';
            }
        }
    }

    groupVillage(words: OcrLinesModel) {
        if (words.text.includes('Kel/Desa')) {
            const sanitazi = this.sanitaziWords('village', words, ':', 1)
            if (sanitazi !== undefined ? sanitazi.length > 0 : false) {
                if (sanitazi.includes('z')) {
                    this.village = sanitazi.replace('z', '')
                } else {
                    this.village = sanitazi.replace('/^a-zA-Z0-9 ]/g', '')
                }
            } else {
                this.village = '-';
            }
        }
    }

    groupSubdistrict(words: OcrLinesModel) {
        if (words.text.includes('Kecamatan')) {
            this.subdistrict = words.text.split(':')[1]
        }
    }

    groupReligion(words: OcrLinesModel) {
        if (words.text.includes('Agama')) {
            const sanitazi = this.sanitaziWords('religion', words, ':', 1)
            if (sanitazi) {
                if (sanitazi.includes('*')) {
                    this.religion = sanitazi.replace('*', '');
                } else if (sanitazi.includes('-,')) {
                    this.religion = sanitazi.replace('-,', '');
                } else if (sanitazi.includes('=')) {
                    this.religion = sanitazi.replace('=', '');
                } else if (sanitazi.includes('T')) {
                    this.religion = sanitazi.replace('T', ':');
                } else {
                    this.religion = sanitazi.replace('', '')
                }
            } else {
                this.religion = '-';
            }

        }
    }

    groupMartialStatus(words: OcrLinesModel) {
        if (words.text.includes('Status')) {
            const sanitazi = this.sanitaziWords('martial_status', words, ':', 1)
            if (sanitazi !== undefined ? sanitazi.length > 0 : false) {
                this.martial_status = sanitazi.replaceAll(".*/([^/]+)/.*", "$1")
            } else {
                this.martial_status = '-';
            }
        }
    }

    groupWork(words: OcrLinesModel) {
        if (words.text.includes('Pekerjaan')) {
            const sanitazi = this.sanitaziWords('work', words, ':', 1)
            if (sanitazi.length > 0) {
                if (sanitazi.includes('N')) {
                    this.work = sanitazi.replace('N', '')
                } else {
                    this.work = sanitazi
                }
            } else {
                this.work = '-';
            }
        }
    }

    groupCitizenship(words: OcrLinesModel) {
        if (words.text.includes('Kewarganegaraan')) {
            this.citizenship = words.text.split(' ')[2]
        }
    }

    groupValidUntil(words: OcrLinesModel) {
        if (words.text.includes('Berlaku')) {
            this.valid_until = words.text.split(':')[1]
        }
    }

    sanitaziWords(field: string, characters: OcrLinesModel, separator: string, position: number) {
        if (field == 'nik') {
            return characters.text.replace('.', ':').split(`${separator}`)[position]
        }
        if (field == 'name') {
            if (characters.text.includes('*')) {
                return characters.text.replace('*', ':').split(`${separator}`)[position]
            }
            if (characters.text.includes('RO')) {
                return characters.text.replace('RO', ':').split(`${separator}`)[position]
            }
            return characters.text.replace('.', ':').split(`${separator}`)[position]
        }
        if (field == 'birth_date') {
            return characters.text.replace('.', ':').split(`${separator}`)[position]
        }
        if (field == 'blood_type') {
            return characters.text.replace('.', ':').split(`${separator}`)[position]
        }
        if (field == 'gender') {
            if (characters.text.includes('!')) {
                return characters.text.replace('!', ':').split(`${separator}`)[position]
            }
            return characters.text.replace('.', ':').split(`${separator}`)[position]
        }
        if (field == 'religion') {
            if (characters.text.includes('1')) {
                return characters.text.replace('1', ':').split(`${separator}`)[position]
            } else if (characters.text.includes('T')) {
                return characters.text.replace('T', ':').split(`${separator}`)[position]
            }
        }
        if (field == 'work') {
            return characters.text.replace('.', ':').split(`${separator}`)[position]
        }
        if (field == 'village') {
            return characters.text.replace('.', ':').split(`${separator}`)[position]
        }
        if (field == 'rt_rw') {
            return characters.text.replace('.', ':').split(`${separator}`)[position]
        }
        if (field == 'martial_status') {
            return characters.text.split(`${separator}`)[position]
        }
        return ''
    }

    clearOcrResult() {
        this.nik = '';
        this.name = '';
        this.birth_date = '';
        this.gender = '';
        this.blood_type = '';
        this.rt_rw = '';
        this.village = '';
        this.subdistrict = '';
        this.religion = '';
        this.martial_status = '';
        this.work = '';
        this.citizenship = '';
        this.valid_until = '';
        this.blood_type = '';
    }

    public handleClick(component: any) {
        console.log('Hello Circle', component);
    }

    get isDisableSubmit() {
        return this.isSubmited
    }

    get isValidIdentity() {
        return this.isValidKtp
    }
}
