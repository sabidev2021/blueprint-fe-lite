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
        console.log(value)
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
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
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
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
                right_label: `${stringLabel.words[4].text}`
            }
        }
    }

    labelBloodType(position: number, stringLabel: OcrLinesModel) {
        if (position === 5) {
            const positionIndex = this.labelingHaveSeparator(stringLabel.words) ? 7 : 6
            let groupWords = `${stringLabel.words[positionIndex].text || '-'}`;
            if (groupWords.includes('A')) {
                groupWords = OCR_CONFIG.BLOOD_TYPE_CLASSIFICATION.A
            }
            if (groupWords.includes('B')) {
                groupWords = OCR_CONFIG.BLOOD_TYPE_CLASSIFICATION.B
            }
            if (groupWords.includes('AB')) {
                groupWords = OCR_CONFIG.BLOOD_TYPE_CLASSIFICATION.AB
            }
            if (groupWords.includes('O')) {
                groupWords = OCR_CONFIG.BLOOD_TYPE_CLASSIFICATION.O
            }
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.BLOOD_TYPE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.BLOOD_TYPE}`,
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
                right_label: `${groupWords}`
            }
        }
    }

    labelGenderType(position: number, stringLabel: OcrLinesModel) {
        if (position === 5) {
            let groupWords = `${stringLabel.words[3].text}`;
            if (groupWords.includes('LAK')) {
                groupWords = OCR_CONFIG.GENDER_TYPE_CLASSIFICATION.LK
            }
            if (groupWords.includes('PER')) {
                groupWords = OCR_CONFIG.GENDER_TYPE_CLASSIFICATION.PM
            }
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.GENDER_TYPE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.GENDER_TYPE}`,
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
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
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
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
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
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
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
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
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
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
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
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
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
                right_label: `${groupWords}`
            }
        }
    }

    labelReligion(position: number, stringLabel: OcrLinesModel) {
        if (position === 10) {
            let groupWords = `${stringLabel.words[1].text.replace(/[^a-zA-Z]/gm, " ").trim()}`;
            if (groupWords.includes("ISL")) {
                groupWords = OCR_CONFIG.RELIGION_TYPE_CLASSIFICATION.ISLAM
            }
            if (groupWords.includes("KRI")) {
                groupWords = OCR_CONFIG.RELIGION_TYPE_CLASSIFICATION.KRISTEN
            }
            if (groupWords.includes("KAT")) {
                groupWords = OCR_CONFIG.RELIGION_TYPE_CLASSIFICATION.KATHOLIK
            }
            if (groupWords.includes("BUD")) {
                groupWords = OCR_CONFIG.RELIGION_TYPE_CLASSIFICATION.BUDHA
            }
            if (groupWords.includes("KON")) {
                groupWords = OCR_CONFIG.RELIGION_TYPE_CLASSIFICATION.KONGHUCU
            }
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.RELIGION} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.RELIGION}`,
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
                right_label: `${groupWords}`
            }
        }
    }

    labelMartialStatus(position: number, stringLabel: OcrLinesModel) {
        if (position === 11) {
            let groupWords = `${stringLabel.words[3].text.replace(/[^a-zA-Z]/gm, " ").trim()}`;
            if (groupWords.includes('KAW')) {
                groupWords = OCR_CONFIG.MARTIAL_STATUS_CLASSIFICATION.KAWIN;
            }
            if (groupWords.includes('BEL')) {
               groupWords = OCR_CONFIG.MARTIAL_STATUS_CLASSIFICATION.BELUM_KAWIN;
            }
            if (groupWords.includes('MAT')) {
                groupWords = OCR_CONFIG.MARTIAL_STATUS_CLASSIFICATION.CERAI_MATI;
            }
            if (groupWords.includes('HID')) {
               groupWords = OCR_CONFIG.MARTIAL_STATUS_CLASSIFICATION.CERAI_HIDUP;
            }
            this.labelOCR = {
                group_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.MARTIAL_STATUS} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`,
                left_label : `${OCR_CONFIG.LABELING_CLASSIFICATION.MARTIAL_STATUS}`,
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
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
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
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
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
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
                separator: `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`,
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

