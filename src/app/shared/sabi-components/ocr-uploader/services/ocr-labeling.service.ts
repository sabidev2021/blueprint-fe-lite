import {Injectable} from '@angular/core';
import {OcrLinesModel} from "@app/shared/sabi-components/ocr-uploader/models/OcrLines.model";
import {OCR_CONFIG} from "@core/constant";
import {OcrWordsModel} from "@app/shared/sabi-components/ocr-uploader/models/OcrWords.model";
import {OcrLabelingModel} from "@app/shared/sabi-components/ocr-uploader/models/OcrLabeling.model";
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class OcrLabelingService {

    private setLabel = new OcrLabelingModel();

    labelingHeader(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 0) {
                const groupWords = `${stringLabel.words[1].text} ${stringLabel.words[2].text}`;
                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.PROVINCE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.PROVINCE}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${groupWords}`;
                return of(this.setLabel)
            }
        }
        return of(this.setLabel)
    }


    labelingHeaderSub(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 1) {
                const groupWords = `${stringLabel.words[1].text}`;
                const capitalizeLetters = stringLabel.words[0].text.charAt(0) + stringLabel.words[0].text.slice(1).toLowerCase();
                this.setLabel.group_label = `${capitalizeLetters} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${capitalizeLetters}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${stringLabel.words[1].text}`;
                return of(this.setLabel)
            }
        }
        return of(this.setLabel)
    }

    labelingNik(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 2) {
                const groupWords = `${stringLabel.words[2].text}`;
                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.NIK} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.NIK}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${groupWords}`;
                return of(this.setLabel)
            }
        }
        return of(this.setLabel)
    }

    labelNames(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 3) {
                const groupWords = `${stringLabel.words[2].text}`;
                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.NAME} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.NAME}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${groupWords}`;
                return of(this.setLabel)
            }
        }
        return of(this.setLabel)
    }

    labelBirthPlaceAndDate(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 4) {
                const groupWords = `${stringLabel.words[3].text} ${stringLabel.words[4].text}`;
                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_PLACE_BIRTH_DATE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_PLACE_BIRTH_DATE}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                return of(this.setLabel)
            }
        }
        return of(this.setLabel)
    }

    labelBirthPlace(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 4) {
                const groupWords = `${stringLabel.words[3].text}`;
                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_PLACE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_PLACE}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${groupWords}`;
                return of(this.setLabel)
            }
        }
        return of(this.setLabel)
    }

    labelBirthDate(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 4) {
                const groupWords = `${stringLabel.words[4].text}`;
                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_DATE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_DATE}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${stringLabel.words[4].text}`;
                return of(this.setLabel)
            }
        }
        return of(this.setLabel)
    }

    labelBloodType(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
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
                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.BLOOD_TYPE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.BLOOD_TYPE}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${groupWords}`;
                return of(this.setLabel)
            }
        }
        return of(this.setLabel)
    }

    labelGenderType(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 5) {
                let groupWords = `${stringLabel.words[3].text}`;
                if (groupWords.includes('LAK')) {
                    groupWords = OCR_CONFIG.GENDER_TYPE_CLASSIFICATION.LK
                }
                if (groupWords.includes('PER')) {
                    groupWords = OCR_CONFIG.GENDER_TYPE_CLASSIFICATION.PM
                }
                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.GENDER_TYPE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.GENDER_TYPE}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${groupWords}`;
                return of(this.setLabel)
            }
        }
        return of(this.setLabel)
    }

    labelAddress(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 6) {
                let array = stringLabel.words;
                let newArr: any = [];
                let separator = ' ';

                for (let i = 0; i < array.length; i++) {
                    newArr += array[i].text;
                    if (i < array.length - 1) {
                        newArr += separator;
                    }
                    if (i === 0) {
                        if (array[i].text.includes("Alamat") || array[i].text.includes("Alamat :")) {
                            newArr = " "
                        }
                    }
                }

                const groupWords = `${newArr.replace(/^A-Z0-9 ]/g, " ").trim()}`;
                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.ADDRESS} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.ADDRESS}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${groupWords}`;
                return of(this.setLabel)
            }
        }
        return of(this.setLabel)
    }

    labelRTRW(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 7) {
                const groupWords = `${stringLabel.words[1].text}${stringLabel.words[2].text}`;
                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.RT_RW} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.RT_RW}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${groupWords}`;
                return of(this.setLabel)
            }
        }
        return of(this.setLabel)
    }

    labelRT(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 7) {
                const groupWords = `${stringLabel.words[1].text.replace(/[^0-9]/g, " ").trim()}`;
                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.RT} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.RT}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${groupWords}`;
                return of(this.setLabel)
            }
        }
        return of(this.setLabel)
    }

    labelRW(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 7) {
                const groupWords = `${stringLabel.words[2].text.replace(/[^0-9]/g, " ").trim()}`;
                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.RW} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.RW}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${groupWords}`;
                return of(this.setLabel)
            }
        }
        return of(this.setLabel)
    }

    labelVillage(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 8) {
                let positionIndex = 2
                if (stringLabel.text.includes(":")) {
                    positionIndex = 1
                }
                const groupWords = `${stringLabel.words[positionIndex].text.replace(/[^a-zA-Z]/gm, " ").trim()}`;
                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.VILLAGE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.VILLAGE}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${groupWords}`;
                return of(this.setLabel)
            }
        }
        return of(this.setLabel)
    }

    labelSubDistrict(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 9) {
                const groupWords = `${stringLabel.words[2].text.replace(/[^a-zA-Z]/gm, " ").trim()}`;
                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.SUBDISTRICT} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.SUBDISTRICT}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${groupWords}`;
                return of(this.setLabel)
            }
        }
        return of(this.setLabel)
    }

    labelReligion(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
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

                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.RELIGION} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.RELIGION}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${groupWords}`;
                return of(this.setLabel)
            }
        }
        return of(this.setLabel)
    }

    labelMartialStatus(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
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
                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.MARTIAL_STATUS} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.MARTIAL_STATUS}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${groupWords}`;
            }
            return of(this.setLabel)
        }
        return of(this.setLabel)
    }

    labelWork(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 12) {
                const groupWords = `${stringLabel.words[1].text.replace(/[^a-zA-Z]/gm, " ").trim()}`;
                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.WORK} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.WORK}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${groupWords}`;
            }
            return of(this.setLabel)
        }
        return of(this.setLabel)
    }

    labelNationaly(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 13) {
                const groupWords = `${stringLabel.words[1].text.replace(/[^a-zA-Z]/gm, " ").trim()}`;
                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.NATIONALITY} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.NATIONALITY}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${groupWords}`;
            }
            return of(this.setLabel)
        }
        return of(this.setLabel)
    }

    labelValidUntil(position: number, stringLabel: OcrLinesModel): Observable<OcrLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 14) {
                const groupWords = `${stringLabel.words[2].text.replace(/[^0-9\-\/]/g, " ").trim()}`;
                this.setLabel.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.VALID_UNTIL} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setLabel.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.VALID_UNTIL}`;
                this.setLabel.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setLabel.right_label = `${groupWords}`;
                return of(this.setLabel)
            }
        }
        return of(this.setLabel)
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
}

