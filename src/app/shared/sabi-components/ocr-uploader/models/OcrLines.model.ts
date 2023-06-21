import {OcrWordsModel} from "@app/shared/sabi-components/ocr-uploader/models/OcrWords.model";
import {OcrPageModel} from "@app/shared/sabi-components/ocr-uploader/models/OcrPage.model";

export class OcrLinesModel {
    baseline!: object;
    bbox!: object;
    block!: object;
    confidence!: number;
    page: OcrPageModel [] = [];
    paragraph!: string;
    text!: string;
    words: OcrWordsModel[] = [];
}

