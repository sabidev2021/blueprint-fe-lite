import {Injectable} from '@angular/core';
import {OcrLinesModel} from "@app/shared/sabi-components/ocr-uploader/models/OcrLines.model";
import {OCR_CONFIG} from "@core/constant";
import {OcrWordsModel} from "@app/shared/sabi-components/ocr-uploader/models/OcrWords.model";
import {OcrLabelingModel} from "@app/shared/sabi-components/ocr-uploader/models/OcrLabeling.model";

@Injectable({
    providedIn: 'root'
})

export class OcrLabelingService {

    _labelOCR!:{};
    _groupOCR: Array<Object> = [];

    get labelOCR(): OcrLabelingModel {
        return <OcrLabelingModel><unknown>this._groupOCR;
    }

    set labelOCR(value: OcrLabelingModel) {
        this._labelOCR = value;
        this._groupOCR.push(value)
    }

    labelingHeader(position: number, stringLabel: OcrLinesModel) {
        if (position === 0) {
            const groupWords = `${stringLabel.words[1].text} ${stringLabel.words[2].text}`;
            this.labelOCR = {
                group_label: `${OCR_CONFIG.LABELING_CLASSIFICATION.PROVINCE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label: `${OCR_CONFIG.LABELING_CLASSIFICATION.PROVINCE}`,
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
                right_label: `${groupWords}`
            }
        }
    }

    labelingHeaderSub(position: number, stringLabel: OcrLinesModel) {
        if (position === 1) {
            const groupWords = `${stringLabel.words[1].text}`;
            const capitalizeLetters = stringLabel.words[0].text.charAt(0) + stringLabel.words[0].text.slice(1).toLowerCase();
            this.labelOCR = {
                group_label : `${capitalizeLetters} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords} `,
                left_label : `${capitalizeLetters}`,
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
                right_label: `${stringLabel.words[1].text}`
            }
        }
    }

    labelingNik(position: number, stringLabel: OcrLinesModel) {
        if (position === 2) {
            const groupWords = `${stringLabel.words[2].text}`;
            this.labelOCR = {
               group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.NIK} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
               left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.NIK}`,
               separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
               right_label: `${groupWords}`
            }
        }
    }

    labelNames(position: number, stringLabel: OcrLinesModel) {
        if (position === 3) {
            const groupWords = `${stringLabel.words[2].text}`;
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.NAME} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.NAME}`,
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
                right_label: `${groupWords}`
            }
        }
    }

    labelBirthPlaceAndDate(position: number, stringLabel: OcrLinesModel) {
        if (position === 4) {
            const groupWords = `${stringLabel.words[3].text} ${stringLabel.words[4].text}`;
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_PLACE_BIRTH_DATE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_PLACE_BIRTH_DATE}`,
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
                right_label: `${groupWords}`
            }
        }
    }

    labelBirthPlace(position: number, stringLabel: OcrLinesModel) {
        if (position === 4) {
            const groupWords = `${stringLabel.words[3].text}`;
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_PLACE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_PLACE}`,
                separator: ':',
                right_label: `${groupWords}`
            }
        }
    }

    labelBirthDate(position: number, stringLabel: OcrLinesModel) {
        if (position === 4) {
            const groupWords = `${stringLabel.words[4].text}`;
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_DATE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_DATE}`,
                separator: ':',
                right_label: `${stringLabel.words[4].text}`
            }
        }
    }

    labelBloodType(position: number, stringLabel: OcrLinesModel) {
        if (position === 5) {
            const positionIndex = this.labelingHaveSeparator(stringLabel.words) ? 7 : 6
            const groupWords = `${stringLabel.words[positionIndex].text || '-'}`;
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.BLOOD_TYPE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.BLOOD_TYPE}`,
                separator: ':',
                right_label: `${groupWords}`
            }
        }
    }

    labelGenderType(position: number, stringLabel: OcrLinesModel) {
        if (position === 5) {
            const groupWords = `${stringLabel.words[3].text}`;
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.GENDER_TYPE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.GENDER_TYPE}`,
                separator: ':',
                right_label: `${groupWords}`
            }
        }
    }

    labelAddress(position: number, stringLabel: OcrLinesModel) {
        if (position === 6) {
            const groupWords = `${stringLabel.words[1].text.replace(/[^a-zA-Z]/gm, " ").trim()}`;
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.ADDRESS} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.ADDRESS}`,
                separator: ':',
                right_label: `${groupWords}`
            }
        }
    }

    labelRTRW(position: number, stringLabel: OcrLinesModel) {
        if (position === 7) {
            const groupWords = `${stringLabel.words[1].text}${stringLabel.words[2].text}`;
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.RT_RW} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.RT_RW}`,
                separator: ':',
                right_label: `${groupWords}`
            }
        }
    }

    labelRT(position: number, stringLabel: OcrLinesModel) {
        if (position === 7) {
            const groupWords = `${stringLabel.words[1].text.replace(/[^0-9]/g, " ").trim()}`;
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.RT} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.RT}`,
                separator: ':',
                right_label: `${groupWords}`
            }
        }
    }

    labelRW(position: number, stringLabel: OcrLinesModel) {
        if (position === 7) {
            const groupWords = `${stringLabel.words[2].text.replace(/[^0-9]/g, " ").trim()}`;
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.RW} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.RW}`,
                separator: ':',
                right_label: `${groupWords}`
            }
        }
    }

    labelVillage(position: number, stringLabel: OcrLinesModel) {
        if (position === 8) {
            let positionIndex = 2
            if (stringLabel.text.includes(":")) {
                positionIndex = 1
            }
            const groupWords = `${stringLabel.words[positionIndex].text.replace(/[^a-zA-Z]/gm, " ").trim()}`;
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.VILLAGE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.VILLAGE}`,
                separator: ':',
                right_label: `${groupWords}`
            }
        }
    }

    labelSubDistrict(position: number, stringLabel: OcrLinesModel) {
        if (position === 9) {
            const groupWords = `${stringLabel.words[2].text.replace(/[^a-zA-Z]/gm, " ").trim()}`;
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.SUBDISTRICT} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.SUBDISTRICT}`,
                separator: ':',
                right_label: `${groupWords}`
            }
        }
    }

    labelReligion(position: number, stringLabel: OcrLinesModel) {
        if (position === 10) {
            const groupWords = `${stringLabel.words[1].text.replace(/[^a-zA-Z]/gm, " ").trim()}`;
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.RELIGION} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.RELIGION}`,
                separator: ':',
                right_label: `${groupWords}`
            }
        }
    }

    labelMartialStatus(position: number, stringLabel: OcrLinesModel) {
        if (position === 11) {
            const groupWords = `${stringLabel.words[3].text.replace(/[^a-zA-Z]/gm, " ").trim()}`;
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.MARTIAL_STATUS} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.MARTIAL_STATUS}`,
                separator: ':',
                right_label: `${groupWords}`
            }
        }
    }

    labelWork(position: number, stringLabel: OcrLinesModel) {
        if (position === 12) {
            const groupWords = `${stringLabel.words[1].text.replace(/[^a-zA-Z]/gm, " ").trim()}`;
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.WORK} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.WORK}`,
                separator: ':',
                right_label: `${groupWords}`
            }
        }
    }

    labelNationaly(position: number, stringLabel: OcrLinesModel) {
        if (position === 13) {
            const groupWords = `${stringLabel.words[1].text.replace(/[^a-zA-Z]/gm, " ").trim()}`;
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.NATIONALITY} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.NATIONALITY}`,
                separator: ':',
                right_label: `${groupWords}`
            }
        }
    }

    labelValidUntil(position: number, stringLabel: OcrLinesModel) {
        if (position === 14) {
            const groupWords = `${stringLabel.words[2].text.replace(/[^0-9\-\/]/g, " ").trim()}`;
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.VALID_UNTIL} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.VALID_UNTIL}`,
                separator: ':',
                right_label: `${groupWords}`
            }
        }
    }

    labelingHaveSeparator(isLabel: OcrWordsModel[]) {
        let isLabelValid = false
        isLabel.forEach((value: OcrWordsModel) => {
            if (value.text.includes("Gol.Darah")) {
                isLabelValid = true
            }
        })
        return isLabelValid
    }

    getCollectionArray() {
        return this._groupOCR
    }

}

