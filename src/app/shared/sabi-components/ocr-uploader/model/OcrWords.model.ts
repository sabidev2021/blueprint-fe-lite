export class OcrWordsModel {
    forEach(arg0: (value: any, key: any) => void) {
        throw new Error('Method not implemented.');
    }
    symbols: [] = [];
    text!: string;
    baseline!: object;
    has_baseline!: boolean;
    bbox!: object;
    block!: object;
    paragraphs: [] = [];
    choices:[] = [];
    confidence!: number;
    direction!: string;
    font_id!: number;
    font_name!: string;
    font_size!: number;
    in_dictionary!: boolean;
    is_bold!: boolean;
    is_italic!: boolean;
    is_monospace!: boolean;
    is_numeric!: boolean;
    is_serif!: boolean;
    is_smallcaps!: boolean;
    is_underlined!: boolean;
    language!: string;
}
