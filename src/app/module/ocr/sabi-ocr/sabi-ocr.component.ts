import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {LoggerStatusModel} from "@app/shared/sabi-components/ocr-uploader/model/LoggerStatus.model";
import {BehaviorSubject} from "rxjs";
import {OcrUploaderService} from "@app/shared/sabi-components/ocr-uploader/ocr-uploader.service";
import {OcrWordsModel} from "@app/shared/sabi-components/ocr-uploader/model/OcrWords.model";
import {OcrModel} from "@app/shared/sabi-components/ocr-uploader/model/Ocr.model";
import {OcrLinesModel} from "@app/shared/sabi-components/ocr-uploader/model/OcrLines.model";
import {ToastService} from "@app/shared/sabi-components/toast/toast.service";
import {IdentityKtpModel} from "@app/module/ocr/model/IdentityKtp.model";
import {AspectScale, Dimensions, ImageCroppedEvent, ImageTransform} from "@app/module/ocr/interface";
import {KonvaComponent} from "ng2-konva";
import {OCR_CONFIG} from "@core/constant";
import {Message} from 'primeng/api';
import {fileBase64Model} from "@app/module/ocr/model/fileBase64.model";

@Component({
    selector: 'app-sabi-ocr',
    templateUrl: './sabi-ocr.component.html',
    styleUrls: ['./sabi-ocr.component.scss'],
})
export class SabiOcrComponent implements OnInit, OnDestroy {

    @ViewChild('stage') stage!: KonvaComponent;
    @ViewChild('layer') layer!: KonvaComponent;
    @ViewChild('dragLayer') dragLayer!: KonvaComponent;
    @Input() accept!: string;
    @Input() inputIndex = 0;
    @Input() inputName = 'file-transfer'
    @Input() imgPath = "./assets/icon/";

    loggerStats: LoggerStatusModel = new LoggerStatusModel();
    identityModel: IdentityKtpModel = new IdentityKtpModel();
    uploadedFiles: File[] = [];
    serviceName: string = 'sabi-ocr-service';
    resultText: string = '';
    isLoading: boolean = false;
    isSubmited: boolean = false;
    isValidKtp: boolean = true;
    isBlury: boolean = false;
    isAlertMessage: boolean = false;
    stateSwitch: any[] = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];
    valueSwitch: string = 'off';
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
    messages!: Message[];
    canvasRotation: number = 0;
    imageChangedEvent: any = '';
    croppedImage: any = '';
    scale: number = 1;
    showCropper: boolean = false;
    containWithinAspectRatio: boolean = false;
    transform: ImageTransform = {};
    visible: boolean = false;
    aspectRatio: Array<object> = [];
    selectedRatio!: AspectScale;
    isDefaultRatio: number = 4 / 3 ;
    isRatioWidth!: number;
    isRatioHeight!: number;
    isMaintainAspectRatio: boolean = true;
    sourceImageDimension: Dimensions | string = '';

    constructor(
        private toastService: ToastService,
        private ocrService: OcrUploaderService,
        private el: ElementRef,
    ) {
        this.ocrService.isLogger()
            .subscribe((value: LoggerStatusModel) => console.info(value));
    }

    ngOnInit() {
        this.iniStageCanvas()
        this.initTheRatios()
    }

    ngOnDestroy() {

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

    onConvertFile(): void {
        this.isBlury = false;
        this.isSubmited = true
        this.scrollToTop('target-scroller')
        if (this.croppedImage.length > 0) {
            this.onSubmitOcr()
        } else {
            this.messages = [{
                severity: 'error',
                summary: 'Error',
                detail: 'Please select a file to be processed'
            }]
            this.isSubmited = false;
        }
    }

    onSubmitOcr() {
        try {
            this.isLoading = true;
            this.ocrService.traceOcrService(`${this.croppedImage}`)
            .then((result: OcrModel | any) => {
                this.isValidateIdentity(result)
                this.mappingDataExtracted(result)
                this.isDebuggingText(result.text)
                if (this.isValidKtp) {
                    this.drawCanvas(this.croppedImage)
                    this.drawLineMarker()
                }
                this.isLoading = false;
                this.isSubmited = false
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
            this.isAlertMessage = true;
            this.isValidKtp = false;
            this.messages = [{
                severity: 'error',
                summary: 'Error',
                detail: 'File not valid a identity ID ( KTP ), Please an input a valid files'
            }];
        }
    }

    mappingDataExtracted(value: OcrModel) {
        value.lines.forEach((value: OcrLinesModel) => {
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
            this.groupProvince(value)
            this.groupCity(value)
        })
    }

    groupNik(words: OcrLinesModel) {
        if (words.text.includes('NIK')) {
            const sanitazi = this.sanitaziWords('nik', words, ':', 1)
            if (sanitazi) {
                this.identityModel.nik = sanitazi.replace(/[^0-9]/g, "").trim()
                this.checkQualityImage(true, 'nik')
            } else {
                this.identityModel.nik = '-';
                this.checkQualityImage(false, 'nik')
            }
        }
    }

    groupName(words: OcrLinesModel) {
        if (words.text.includes('Nama')) {
            const sanitazi = this.sanitaziWords('name', words, ':', 1)
            if (sanitazi) {
                this.identityModel.name = sanitazi.replace(/[^a-zA-Z]/gm, " ");
                this.checkQualityImage(true, 'name')
            } else {
                this.identityModel.name = '-';
                this.checkQualityImage(false, 'name')
            }
        }
    }

    groupBirthDate(words: OcrLinesModel) {
        if (words.text.includes('Tempat')) {
            const sanitazi = this.sanitaziWords('birth_date', words, ':', 1)
            if (sanitazi) {
                this.identityModel.birth_date = sanitazi.split(" ")[2];
                this.checkQualityImage(true, 'birth_date')
            } else {
                this.identityModel.birth_date = '-';
                this.checkQualityImage(false, 'birth_date')
            }
        }
    }

    groupBirthPlace(words: OcrLinesModel) {
        if (words.text.includes('Tempat')) {
            const sanitazi = this.sanitaziWords('birth_place', words, ':', 1)
            if (sanitazi) {
                this.identityModel.birth_place = sanitazi.replace(/[^A-Z]/g, " ");
                this.checkQualityImage(true, 'birth_place')
            } else {
                this.identityModel.birth_place = '-';
                this.checkQualityImage(false, 'birth_place')
            }
        }
    }

    groupGender(words: OcrLinesModel) {
        if (words.text.includes('Jenis')) {
            const sanitazi = this.sanitaziWords('gender', words, ':', 1)
            if (sanitazi) {
                if (sanitazi.includes('LAK')) {
                    this.identityModel.gender = OCR_CONFIG.GENDER_TYPE_CLASSIFICATION.LK
                }
                if (sanitazi.includes('PER')) {
                    this.identityModel.gender = OCR_CONFIG.GENDER_TYPE_CLASSIFICATION.PM
                }
            } else {
                this.identityModel.gender = '-';
            }
        }
    }

    groupBloodType(words: OcrLinesModel) {
        const sanitazi = this.sanitaziWords('blood_type', words, ':', 3)
        if (sanitazi) {
            this.identityModel.blood_type = sanitazi.replace(/[^A-Z]/g, " ").trim();
        } else {
            this.identityModel.blood_type = '-';
        }
    }

    groupRtRw(words: OcrLinesModel) {
        if (words.text.includes('RT/RW')) {
            const sanitazi = this.sanitaziWords('rt_rw', words, ':', 1)
            if (sanitazi) {
                if (words.text.includes('/')) {
                    const splitChars = sanitazi.trim().split("/").join(" ").split(" ")
                    this.identityModel.rt = splitChars[0]
                    this.identityModel.rw = splitChars[1]
                }
            } else {
                this.identityModel.rt = '-';
                this.identityModel.rw = '-';
            }
        }
    }

    groupVillage(words: OcrLinesModel) {
        if (words.text.includes('Kel')) {
            const sanitazi = this.sanitaziWords('village', words, ':', 1)
            if (sanitazi) {
                this.identityModel.village = sanitazi.replace(/[^A-Z]/g, " ");
            } else {
                this.identityModel.village = '-';
            }
        }
    }

    groupSubdistrict(words: OcrLinesModel) {
        if (words.text.includes('Kecamatan')) {
            const sanitazi = this.sanitaziWords('subdistrict', words, ':', 1)
            if (sanitazi) {
                this.identityModel.subdistrict = sanitazi.replace(/[^A-Z]+/gm, " ");
            } else {
                this.identityModel.subdistrict = '-';
            }
        }
    }

    groupReligion(words: OcrLinesModel) {
        if (words.text.includes('Agama')) {
            const sanitazi = this.sanitaziWords('religion', words, ':', 1)
            if (sanitazi) {
                if (words.text.includes("ISL")) {
                    this.identityModel.religion = OCR_CONFIG.RELIGION_TYPE_CLASSIFICATION.ISLAM
                }
                if (words.text.includes("KRI")) {
                    this.identityModel.religion = OCR_CONFIG.RELIGION_TYPE_CLASSIFICATION.KRISTEN
                }
                if (words.text.includes("KAT")) {
                    this.identityModel.religion = OCR_CONFIG.RELIGION_TYPE_CLASSIFICATION.KATHOLIK
                }
                if (words.text.includes("BUD")) {
                    this.identityModel.religion = OCR_CONFIG.RELIGION_TYPE_CLASSIFICATION.BUDHA
                }
                if (words.text.includes("KON")) {
                    this.identityModel.religion = OCR_CONFIG.RELIGION_TYPE_CLASSIFICATION.KONGHUCU
                }
            } else {
                this.identityModel.religion = '-';
            }

        }
    }

    groupMartialStatus(words: OcrLinesModel) {
        if (words.text.includes('Status')) {
            const sanitazi = this.sanitaziWords('martial_status', words, ':', 1)
            if (sanitazi) {
                if (sanitazi.includes('KAW')) {
                    this.identityModel.martial_status = OCR_CONFIG.MARTIAL_STATUS_CLASSIFICATION.KAWIN;
                }
                if (sanitazi.includes('BEL')) {
                    this.identityModel.martial_status = OCR_CONFIG.MARTIAL_STATUS_CLASSIFICATION.BELUM_KAWIN;
                }
                if (sanitazi.includes('MAT')) {
                    this.identityModel.martial_status = OCR_CONFIG.MARTIAL_STATUS_CLASSIFICATION.CERAI_MATI;
                }
                if (sanitazi.includes('HID')) {
                    this.identityModel.martial_status = OCR_CONFIG.MARTIAL_STATUS_CLASSIFICATION.CERAI_HIDUP;
                }
            } else {
                this.identityModel.martial_status = '-';
            }
        }
    }

    groupWork(words: OcrLinesModel) {
        if (words.text.includes('Pekerjaan')) {
            const sanitazi = this.sanitaziWords('work', words, ':', 1)
            if (sanitazi) {
                this.identityModel.work = sanitazi.replace(/[^0-9a-zA-Z]+/gm, " ");
            } else {
                this.identityModel.work = '-';
            }
        }
    }

    groupCitizenship(words: OcrLinesModel) {
        if (words.text.includes('Kew')) {
            const sanitazi = this.sanitaziWords('citizenship', words, ':', 1)
            if (sanitazi) {
                if (sanitazi.includes('WNI')) {
                    this.identityModel.citizenship = OCR_CONFIG.NATIONALITY_TYPE_CLASSIFICATION.WNI
                }
                if (sanitazi.includes('WNA')) {
                    this.identityModel.citizenship = OCR_CONFIG.NATIONALITY_TYPE_CLASSIFICATION.WNA
                }
            } else {
                this.identityModel.citizenship = '-';
            }
        }
    }

    groupValidUntil(words: OcrLinesModel) {
        if (words.text.includes('Berlaku')) {
            const sanitazi = this.sanitaziWords('citizenship', words, ':', 1)
            if (sanitazi) {
                if (words.text.includes('SEUMUR')) {
                    this.identityModel.valid_until = OCR_CONFIG.VALID_UNTIL_TYPE_CLASSIFICATION.LIFE_TIME
                }
            } else {
                this.identityModel.valid_until = '-'
            }
        }
    }

    groupProvince(words: OcrLinesModel) {
        if (words.text.includes('Provi')) {
            this.identityModel.province = words.text.split(" ")[0]
        }
    }

    groupCity(words: OcrLinesModel) {
        if (words.text.includes('Provi')) {
            this.identityModel.city = words.text.split(" ")[1]
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
            if (characters.text.includes(':')) {
                return characters.text.replace(':', ': ').split(`${separator}`)[position]
            }
            return characters.text.replace('.', ':').split(`${separator}`)[position]
        }
        if (field == 'gender') {
            if (characters.text.includes('!')) {
                return characters.text.replace('!', ':').split(`${separator}`)[position]
            }
            return characters.text.replace('.', ':').split(`${separator}`)[position]
        }
        if (field == 'religion') {
            if (characters.text.includes('(')) {
                return characters.text.replace('(', ':').split(`${separator}`)[position]
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
            if (characters.text.includes('1')) {
                return characters.text.replace('1', ': ').split(`${separator}`)[position]
            }
            if (characters.text.includes(':')) {
                return characters.text.replace(':', ': ').split(`${separator}`)[position]
            }
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
        this.isSubmited = false
        this.isBlury = false
        this.identityModel = new IdentityKtpModel()
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
        this.resultText = "";
    }

    checkQualityImage(isQuality: boolean, field: string) {
        if (!isQuality && field == 'nik' || !isQuality && field == 'name' || !isQuality && field == 'birth_date' || !isQuality && field == 'birth_place') {
            this.isBlury = true;
            this.isAlertMessage = true;
            this.messages = [{
                severity: 'error',
                summary: 'Error',
                detail: 'Make sure the file or picture not blur or have a good quality '
            }];
        }
        if (this.isBlury) {
            this.croppedImage = "";
        }
    }

    isDebuggingText(character: string) {
        this.resultText = character.trim().split(" ").join("")
    }

    scrollToTop(isTarget: string) {
        document.getElementById(isTarget)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    initTheRatios(): void {
        this.aspectRatio = [
            { label: "Choose Ratio", scale: { width: 0,  height: 0 } },
            { label: "1 / 1", scale: { width: 1,  height: 1 } },
            { label: "3 / 2", scale: { width: 3,  height: 2 } },
            { label: "4 / 3", scale: { width: 4,  height: 3 } },
            { label: "16 / 9", scale: { width: 16,  height: 9 } },
        ]
    }

    changeTheRatios(event: { value: { width: string, height: string } }) {
        this.isRatioWidth = parseInt(event.value.width)
        this.isRatioHeight = parseInt(event.value.height)
    }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }

    imageLoaded() {
        this.showCropper = true;
        this.visible = true;
    }

    cropperReady(sourceImageDimensions: Dimensions) {
        this.sourceImageDimension = sourceImageDimensions
    }

    loadImageFailed() {
        this.toastService.error('Whoops something when wrong image load failed !')
    }

    zoomOut() {
        this.scale -= .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }

    zoomIn() {
        this.scale += .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }

    toggleContainWithinAspectRatio() {
        this.containWithinAspectRatio = !this.containWithinAspectRatio;
    }

    submitCropping() {
        this.visible = false
    }

    dragAspectRatio() {
        this.isMaintainAspectRatio = !this.isMaintainAspectRatio
    }

    onTriggerInput() {
        this.isAlertMessage = false;
        const hostElem = this.el.nativeElement;
        hostElem.querySelector(`input[name='${this.inputName + '-' + this.inputIndex}']`).click();
    }

    flipHoriziontal() {
        this.transform = {
            ...this.transform,
            flipH: !this.transform.flipH
        };
    }

    flipVertical() {
        this.transform = {
            ...this.transform,
            flipV: !this.transform.flipV
        };
    }

    rotateLeft() {
        this.canvasRotation--;
        this.flipAfterRotate();
    }

    rotateRight() {
        this.canvasRotation++;
        this.flipAfterRotate();
    }

    private flipAfterRotate() {
        const flippedH = this.transform.flipH;
        const flippedV = this.transform.flipV;
        this.transform = {
            ...this.transform,
            flipH: flippedV,
            flipV: flippedH
        };
    }

    onRemovedFiles() {
        this.croppedImage = '';
        this.showCropper = false;
        this.clearOcrResult()
    }

    onFileDropped(files: File[]) {
        this.ocrService.createFileToBase64(files).then((result: fileBase64Model) => {
            this.croppedImage = result.data
        })
        this.visible = true;
        this.showCropper = true
    }

    get isDisableSubmit() {
        return this.isSubmited
    }

    get isValidIdentity() {
        return this.isValidKtp
    }

}
