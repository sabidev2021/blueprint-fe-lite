export class OcrPageMetaDataModel {
    baseline!: object;
    bbox!: object;
    block!: string;
    blocktype!: string;
    confidence!: number;
    is_ltr: boolean = true;
    lines:[] = [];
    page!: [];
    paragraphs!: [];
    polygon!: null;
    text!: string;
}
