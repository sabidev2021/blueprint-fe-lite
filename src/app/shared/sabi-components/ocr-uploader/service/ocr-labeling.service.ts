import {Injectable} from '@angular/core';
import {OcrLinesModel} from "@app/shared/sabi-components/ocr-uploader/model/OcrLines.model";
import {OCR_CONFIG} from "@core/constant";

@Injectable({
    providedIn: 'root'
})

export class OcrLabelingService {

    labelingHeader(position: number, stringLabel: OcrLinesModel) {
        if (position === 0) {
            const createLabel = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.PROVINCE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${stringLabel.words[1].text} ${stringLabel.words[2].text}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.PROVINCE}`,
                separator: ':',
                right_label: `${stringLabel.words[1].text} ${stringLabel.words[2].text}`
            }
            console.log(createLabel);
        }
    }

    labelingHeaderSub(position: number, stringLabel: OcrLinesModel) {
        if (position === 1) {
            const createLabel = {
                group_label : `${stringLabel.words[0].text} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${stringLabel.words[1].text}`,
                left_label : `${stringLabel.words[0].text.toUpperCase()}`,
                separator: ':',
                right_label: `${stringLabel.words[0].text} ${stringLabel.words[1].text}`
            }
            console.log(createLabel);
        }
    }

    labelingNik(position: number, stringLabel: OcrLinesModel) {
        if (position === 2) {
            const createLabel = {
               group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.NIK} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${stringLabel.words[2].text}`,
               left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.NIK}`,
               separator: ':',
               right_label: `${stringLabel.words[2].text}`
            }
            console.log(createLabel);
        }
    }

    labelNames(position: number, stringLabel: OcrLinesModel) {
        if (position === 3) {
            const createLabel = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.NAME} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${stringLabel.words[2].text}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.NAME}`,
                separator: ':',
                right_label: `${stringLabel.words[2].text}`
            }
            console.log(createLabel);
        }
    }

    labelBirthPlaceAndDate(position: number, stringLabel: OcrLinesModel) {
        if (position === 4) {
            const createLabel = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_PLACE_BIRTH_DATE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${stringLabel.words[3].text} ${stringLabel.words[4].text}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_PLACE_BIRTH_DATE}`,
                separator: ':',
                right_label: `${stringLabel.words[3].text} ${stringLabel.words[4].text}`
            }
            console.log(createLabel);
        }
    }

    labelBirthPlace(position: number, stringLabel: OcrLinesModel) {
        if (position === 4) {
            const createLabel = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_PLACE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${stringLabel.words[3].text}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_PLACE}`,
                separator: ':',
                right_label: `${stringLabel.words[3].text}`
            }
            console.log(createLabel);
        }
    }

    labelBirthDate(position: number, stringLabel: OcrLinesModel) {
        if (position === 4) {
            const createLabel = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_DATE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${stringLabel.words[4].text}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_DATE}`,
                separator: ':',
                right_label: `${stringLabel.words[4].text}`
            }
            console.log(createLabel);
        }
    }
}
