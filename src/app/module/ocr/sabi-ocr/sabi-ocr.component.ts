import {
    Component,
    DoCheck,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    ViewChild
} from '@angular/core';
import {LoggerStatusModel} from "@app/shared/sabi-components/ocr-uploader/models/LoggerStatus.model";
import {BehaviorSubject} from "rxjs";
import {OcrUploaderService} from "@app/shared/sabi-components/ocr-uploader/services/ocr-uploader.service";
import {OcrWordsModel} from "@app/shared/sabi-components/ocr-uploader/models/OcrWords.model";
import {OcrModel} from "@app/shared/sabi-components/ocr-uploader/models/Ocr.model";
import {OcrLinesModel} from "@app/shared/sabi-components/ocr-uploader/models/OcrLines.model";
import {ToastService} from "@app/shared/sabi-components/toast/toast.service";
import {IdentityKtpModel} from "@app/module/ocr/models/Identity-Ktp.model";
import {AspectScale, Dimensions, ImageCroppedEvent, ImageTransform} from "@app/module/ocr/interfaces";
import {KonvaComponent} from "ng2-konva";
import {Message} from 'primeng/api';
import {FileBase64Model} from "@app/module/ocr/models/File-Base64.model";
import {OcrLabelingService} from "@app/shared/sabi-components/ocr-uploader/services/ocr-labeling.service";
import {OcrLabelingModel} from "@app/shared/sabi-components/ocr-uploader/models/OcrLabeling.model";

@Component({
    selector: 'app-sabi-ocr',
    templateUrl: './sabi-ocr.component.html',
    styleUrls: ['./sabi-ocr.component.scss'],
})
export class SabiOcrComponent implements OnInit, DoCheck {

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
    serviceName: string = 'sabi-ocr-services';
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
    isDefaultRatio: number = 4 / 3;
    isRatioWidth!: number;
    isRatioHeight!: number;
    isMaintainAspectRatio: boolean = true;
    sourceImageDimension: Dimensions | string = '';
    isLoggerOcr: Array<any> = [];
    private isGroupLabel: OcrLabelingModel[] = [];

    constructor(
        private toastService: ToastService,
        private ocrService: OcrUploaderService,
        private ocrLabelingService: OcrLabelingService,
        private el: ElementRef,
    ) {
    }

    ngOnInit() {
        this.iniStageCanvas()
        this.initTheRatios()
    }

    ngDoCheck() {
        this.runLoggerOcr()
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
            this.runLoggerOcr()
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
            console.log(this.isGroupLabel)
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
        value.lines.forEach((words: OcrLinesModel, position: number) => {
            this.ocrLabelingService.labelingHeader(position, words).subscribe(value => this.identityModel.province = value.province.right_label)
            this.ocrLabelingService.labelingHeaderSub(position, words).subscribe(value => this.identityModel.city = value.city.right_label)
            this.ocrLabelingService.labelingNik(position, words).subscribe(value => this.identityModel.nik = value.nik.right_label)
            this.ocrLabelingService.labelNames(position, words).subscribe(value => this.identityModel.name = value.names.right_label)
            this.ocrLabelingService.labelBirthDate(position, words).subscribe(value => this.identityModel.birth_date = value.birth_date.right_label)
            this.ocrLabelingService.labelBirthPlace(position, words).subscribe(value => this.identityModel.birth_place = value.birth_place.right_label)
            this.ocrLabelingService.labelGenderType(position, words).subscribe(value => this.identityModel.gender = value.gender.right_label)
            this.ocrLabelingService.labelBloodType(position, words).subscribe(value => this.identityModel.blood_type = value.blood_type.right_label)
            this.ocrLabelingService.labelRT(position, words).subscribe(value => this.identityModel.rt = value.rt.right_label)
            this.ocrLabelingService.labelRW(position, words).subscribe(value => this.identityModel.rw = value.rw.right_label)
            this.ocrLabelingService.labelVillage(position, words).subscribe(value => this.identityModel.village = value.village.right_label)
            this.ocrLabelingService.labelReligion(position, words).subscribe(value => this.identityModel.village = value.village.right_label)
            this.ocrLabelingService.labelSubDistrict(position, words).subscribe(value => this.identityModel.subdistrict = value.subdistrict.right_label)
            this.ocrLabelingService.labelMartialStatus(position, words).subscribe(value => this.identityModel.martial_status = value.martial_status.right_label)
            this.ocrLabelingService.labelWork(position, words).subscribe(value => this.identityModel.work = value.work.right_label)
            this.ocrLabelingService.labelNationaly(position, words).subscribe(value => this.identityModel.nationaly = value.nationaly.right_label)
            this.ocrLabelingService.labelValidUntil(position, words).subscribe(value => this.identityModel.valid_until = value.valid_until.right_label)
        })
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
            {label: "Choose Ratio", scale: {width: 0, height: 0}},
            {label: "1 / 1", scale: {width: 1, height: 1}},
            {label: "3 / 2", scale: {width: 3, height: 2}},
            {label: "4 / 3", scale: {width: 4, height: 3}},
            {label: "16 / 9", scale: {width: 16, height: 9}},
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
        this.showCropper = true
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
        this.ocrService.createFileToBase64(files).then((result: FileBase64Model) => {
            this.croppedImage = result.data
            this.showCropper = true
        })
        if (this.croppedImage.length > 0) {
            this.visible = true;
        }
    }

    private runLoggerOcr() {
        if (this.isSubmited) {
            this.ocrService.isLogger().subscribe((value: LoggerStatusModel) => this.isLoggerOcr.push({
                status: value.status !== undefined ? value.status : "idle preparing",
                progress: value.progress !== undefined ? value.progress : 0
            }));
        }
    }

    get isDisableSubmit() {
        return this.isSubmited
    }

    get isValidIdentity() {
        return this.isValidKtp
    }
}
