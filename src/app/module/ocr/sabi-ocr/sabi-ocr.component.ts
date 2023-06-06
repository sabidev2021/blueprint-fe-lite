import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {LoggerStatusModel} from "@app/shared/sabi-components/ocr-uploader/model/LoggerStatus.model";
import {BehaviorSubject} from "rxjs";
import {OcrUploaderService} from "@app/shared/sabi-components/ocr-uploader/ocr-uploader.service";
import {ErrorUploadedModel} from "@app/shared/sabi-components/ocr-uploader/model/ErrorUploaded.model";
import {FinishUploadedModel} from "@app/shared/sabi-components/ocr-uploader/model/FinishUploaded.model";
import {OcrWordsModel} from "@app/shared/sabi-components/ocr-uploader/model/OcrWords.model";
import {OcrModel} from "@app/shared/sabi-components/ocr-uploader/model/Ocr.model";
import {OcrLinesModel} from "@app/shared/sabi-components/ocr-uploader/model/OcrLines.model";
import {ToastService} from "@app/shared/sabi-components/toast/toast.service";
import {KonvaComponent} from "ng2-konva";

@Component({
    selector: 'app-sabi-ocr',
    templateUrl: './sabi-ocr.component.html',
    styleUrls: ['./sabi-ocr.component.scss']
})
export class SabiOcrComponent implements OnInit {

    @ViewChild('stage') stage!: KonvaComponent;
    @ViewChild('layer') layer!: KonvaComponent;
    @ViewChild('dragLayer') dragLayer!: KonvaComponent;

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
    birth_place!: string;
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
    list: Array<any> = [];
    public configStage = new BehaviorSubject({
        width: 200,
        height: 200,
        draggable: false,
    });
    public configImage: EventEmitter<Object> = new EventEmitter();
    public configRect = new BehaviorSubject({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        stroke: '',
        strokeWidth: 0
    });

    constructor(
        private toastService: ToastService,
        private ocrService: OcrUploaderService
    ) {
        this.ocrService.isLogger()
            .subscribe((value: LoggerStatusModel) => console.info(value));
    }

    ngOnInit() {
        this.iniStageCanvas()
    }

    iniStageCanvas() {
        this.configStage.next({
            width: 900,
            height: 500,
            draggable: false
        });
    }

    drawCanvas(imageUrl: string) {
        const imageOcr = new Image();
        imageOcr.onload = () => {
            this.configImage.emit({
                image: imageOcr
            });
        };
        imageOcr.src = imageUrl
    }

    drawLineMarker() {
        this.configRect.next({
            x: 150,
            y: 70,
            width: 340,
            height: 30,
            stroke: 'red',
            strokeWidth: 2
        });
    }

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
                    if (this.isValidKtp) {
                        this.drawCanvas(this.blobUrl)
                        this.drawLineMarker()
                    }
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
        // console.log(value.lines)
        value.lines.forEach((value: OcrLinesModel) => {
            console.log(value.text.replaceAll(/(\r\n|\n|\r\|&;\$%@"<>—\(\)\+)/gm, " ").trim().split(" "))
            // if (value.text.includes('/')) {
            //     console.log(value.text.split(" "))
            // }
            // if (value.text.includes('AGAMA')) {
            //     const labelReligion = value.text.replaceAll(value.text, `AGAMA : ${value.text.replace(":", " ").split(" ")[1]}`);
            //     console.log(labelReligion)
            // }
            this.groupNik(value)
            this.groupName(value)
            this.groupBirthDate(value)
            this.groupBirthPlace(value)
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
            if (sanitazi) {
                this.nik = sanitazi.replace(/[^0-9]/g, "").trim()
            } else {
                this.nik = '-';
            }
        }
    }

    groupName(words: OcrLinesModel) {
        if (words.text.includes('Nama')) {
            const sanitazi = this.sanitaziWords('name', words, ':', 1)
            if (sanitazi) {
                console.log(sanitazi)
                this.name = sanitazi.replace(/[^a-zA-Z]/gm, " ")
            } else {
                this.name = '-';
            }
        }
    }

    groupBirthDate(words: OcrLinesModel) {
        if (words.text.includes('Tempat')) {
            const sanitazi = this.sanitaziWords('birth_date', words, ':', 1)
            if (sanitazi) {
                this.birth_date = sanitazi.split(" ")[2]
            } else {
                this.birth_date = '-';
            }
        }
    }

    groupBirthPlace(words: OcrLinesModel) {
        if (words.text.includes('Tempat')) {
            const sanitazi = this.sanitaziWords('birth_place', words, ':', 1)
            if (sanitazi) {
                this.birth_place = sanitazi.replace(/[^A-Z]/g, " ")
            } else {
                this.birth_place = '-';
            }
        }
    }

    groupGender(words: OcrLinesModel) {
        if (words.text.includes('Jenis')) {
            const sanitazi = this.sanitaziWords('gender', words, ':', 1)
            if (sanitazi) {
                const filterChar = sanitazi.replace(/[^A-Z]/g, " ").trim()
                console.log(filterChar.split(" "))
                this.gender = filterChar
            } else {
                this.gender = '-';
            }
        }
    }

    groupBloodType(words: OcrLinesModel) {
        if (words.text.includes('Gol')) {
            const sanitazi = this.sanitaziWords('blood_type', words, ':', 3)
            if (sanitazi !== undefined ? sanitazi.length > 0 : false) {
                this.blood_type = sanitazi.replace(/[^A-Z]/gm, " ")
            } else {
                this.blood_type = '-';
            }
        }
    }

    groupRtRw(words: OcrLinesModel) {
        if (words.text.includes('RT/RW')) {
            const sanitazi = this.sanitaziWords('rt_rw', words, ':', 1)
            if (sanitazi !== undefined ? sanitazi.length > 0 : false) {
                this.rt_rw = sanitazi.replace(/[^A-Z]/gm, " ")
            } else {
                this.rt_rw = '-';
            }
        }
    }

    groupVillage(words: OcrLinesModel) {
        if (words.text.includes('Kel/Desa')) {
            const sanitazi = this.sanitaziWords('village', words, ':', 2)
            if (sanitazi !== undefined ? sanitazi.length > 0 : false) {
                this.village = sanitazi.replace(/^[A-Z]/g, '')
            } else {
                this.village = '-';
            }
        }
    }

    groupSubdistrict(words: OcrLinesModel) {
        if (words.text.includes('Kecamatan')) {
            const sanitazi = this.sanitaziWords('subdistrict', words, ':', 1)
            if (sanitazi) {
                this.subdistrict = sanitazi.replace(/[^A-Z]+/gm, "")
            } else {
                this.subdistrict = '-';
            }
        }
    }

    groupReligion(words: OcrLinesModel) {
        if (words.text.includes('Agama')) {
            const sanitazi = this.sanitaziWords('religion', words, ':', 1)
            if (sanitazi) {
                console.log(sanitazi)
                this.religion = sanitazi.replace(/([^A-Z][^\w ]|_|,|;)/g, " ")
            } else {
                this.religion = '-';
            }

        }
    }

    groupMartialStatus(words: OcrLinesModel) {
        if (words.text.includes('Status')) {
            const sanitazi = this.sanitaziWords('martial_status', words, ':', 1)
            if (sanitazi !== undefined ? sanitazi.length > 0 : false) {
                this.martial_status = sanitazi.replaceAll(/[^A-Z]/g, " ")
            } else {
                this.martial_status = '-';
            }
        }
    }

    groupWork(words: OcrLinesModel) {
        if (words.text.includes('Pekerjaan')) {
            const sanitazi = this.sanitaziWords('work', words, ':', 1)
            if (sanitazi) {
                this.work = sanitazi.replace(/[^0-9a-zA-Z]+/gm, " ")
            } else {
                this.work = '-';
            }
        }
    }

    groupCitizenship(words: OcrLinesModel) {
        if (words.text.includes('Kew')) {
            const sanitazi = this.sanitaziWords('citizenship', words, ':', 1)
            if (sanitazi) {
                if (sanitazi.includes('WNI')) {
                    this.citizenship = sanitazi.replace(sanitazi, "WNI")
                } else {
                    this.citizenship = sanitazi.replace(/[^A-Z]/g, "")
                }
            } else {
                this.citizenship = '-';
            }
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
            if (characters.text.includes('.')) {
                return characters.text.replace('.', ':').split(`${separator}`)[position]
            }
            return characters.text.split(`${separator}`)[position]
        }
        if (field == 'birth_date') {
            return characters.text.replace('.', ':').split(`${separator}`)[position]
        }
        if (field == 'birth_place') {
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
            if (characters.text.includes('/[^A-Z]/gm')) {
                return characters.text.replace(/[^A-Z]/gm, ':').split(`${separator}`)[position]
            }
            return characters.text.split(`${separator}`)[position]
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
        if (field == 'citizenship') {
            if (characters.text.includes(':')) {
                return characters.text.replace('Kewarganegaraan:', 'Kewarganegaraan :').split(`${separator}`)[position]
            }
            return characters.text.split(`${separator}`)[position]
        }
        if (field == 'subdistrict') {
            return characters.text.split(`${separator}`)[position]
        }

        return ''
    }

    clearOcrResult() {
        this.nik = '';
        this.name = '';
        this.birth_date = '';
        this.birth_place = '';
        this.gender = '';
        this.rt_rw = '';
        this.village = '';
        this.subdistrict = '';
        this.religion = '';
        this.martial_status = '';
        this.work = '';
        this.citizenship = '';
        this.valid_until = '';
        this.blood_type = '';
        this.configImage.emit({
            image: ''
        });
        this.configRect.next({
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            stroke: '',
            strokeWidth: 0
        });
    }

    get isDisableSubmit() {
        return this.isSubmited
    }

    get isValidIdentity() {
        return this.isValidKtp
    }
}
