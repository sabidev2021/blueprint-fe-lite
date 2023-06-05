import {OcrBlocksModel} from "@app/shared/sabi-components/ocr-uploader/model/OcrBlocks.model";
import {OcrPageModel} from "@app/shared/sabi-components/ocr-uploader/model/OcrPage.model";
import {OcrLinesModel} from "@app/shared/sabi-components/ocr-uploader/model/OcrLines.model";
import {OcrWordsModel} from "@app/shared/sabi-components/ocr-uploader/model/OcrWords.model";

export class OcrModel {
    text!: string;
    blocks: OcrBlocksModel[] = [];
    box!: null;
    confidence!: number;
    debug!: null;
    page: OcrPageModel[] = [];
    hocr!: string;
    imageBinary!: null;
    imageColor!: null;
    imageGrey!: null;
    lines: OcrLinesModel[] = [];
    version!: string;
    words: OcrWordsModel[] = [];

    includes(nik: string) {
        return false;
    }
}
