import {Injectable} from '@angular/core';
import {OcrLinesModel} from "@app/shared/sabi-components/ocr-uploader/models/OcrLines.model";
import {OCR_CONFIG} from "@core/constant";
import {Observable, of} from "rxjs";
import {OcrGroupLabelingModel} from "@app/shared/sabi-components/ocr-uploader/models/OcrGroupLabeling.model";

@Injectable({
    providedIn: 'root'
})

export class OcrLabelingService {

    private setGroupingLabel = new OcrGroupLabelingModel();

    labelingHeader(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 0) {
                // const groupWords = `${stringLabel.words[1].text} ${stringLabel.words[2].text}`;
                // this.setGroupingLabel.header.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.PROVINCE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                // this.setGroupingLabel.header.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.PROVINCE}`;
                // this.setGroupingLabel.header.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                // this.setGroupingLabel.header.right_label = `${groupWords}`;
                // return of(this.setGroupingLabel)
            }
        }
        return of(this.setGroupingLabel)
    }

    labelHeaderSub(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 1) {
                // const groupWords = `${stringLabel.words[1].text}`;
                // const capitalizeLetters = stringLabel.words[0].text.charAt(0) + stringLabel.words[0].text.slice(1).toLowerCase();
                // this.setGroupingLabel.subheader.group_label = `${capitalizeLetters} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                // this.setGroupingLabel.subheader.left_label = `${capitalizeLetters}`;
                // this.setGroupingLabel.subheader.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                // this.setGroupingLabel.subheader.right_label = `${stringLabel.words[1].text}`;
                // return of(this.setGroupingLabel)
            }
        }
        return of(this.setGroupingLabel)
    }

    labelNik(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 2) {
                const groupWords = this.suffixLabeling(stringLabel).trim();
                this.setGroupingLabel.nik.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.NIK} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setGroupingLabel.nik.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.NIK}`;
                this.setGroupingLabel.nik.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setGroupingLabel.nik.right_label = groupWords.replace(/[^0-9]+/g, " ");
                return of(this.setGroupingLabel)
            }
        }
        return of(this.setGroupingLabel)
    }

    labelNames(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 3) {
                const groupWords = this.suffixLabeling(stringLabel).replace(": :", ":").split(":")[1].trim();
                this.setGroupingLabel.names.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.NAME} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setGroupingLabel.names.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.NAME}`;
                this.setGroupingLabel.names.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setGroupingLabel.names.right_label = groupWords.replace(/[^A-Z]+/g, " ");
                return of(this.setGroupingLabel)
            }
        }
        return of(this.setGroupingLabel)
    }

    labelBirthPlaceAndDate(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 4) {
                const groupWords = `${stringLabel.words[3].text} ${stringLabel.words[4].text}`;
                this.setGroupingLabel.birt_place_and_date.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_PLACE_BIRTH_DATE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setGroupingLabel.birt_place_and_date.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_PLACE_BIRTH_DATE}`;
                this.setGroupingLabel.birt_place_and_date.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                return of(this.setGroupingLabel)
            }
        }
        return of(this.setGroupingLabel)
    }

    labelBirthPlace(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 4) {
                const groupWords = this.suffixLabeling(stringLabel).replace("Lahir :", "").replace("Lahir", " ").split(":")[1].replace(/[^A-Z]/gm, " ").trim();
                this.setGroupingLabel.birth_place.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_PLACE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setGroupingLabel.birth_place.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_PLACE}`;
                this.setGroupingLabel.birth_place.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setGroupingLabel.birth_place.right_label = `${groupWords}`;
                return of(this.setGroupingLabel)
            }
        }
        return of(this.setGroupingLabel)
    }

    labelBirthDate(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 4) {
                const groupWords = this.suffixLabeling(stringLabel).replace("Lahir :", "").replace("Lahir", " ").split(",")[1].replace(/[^0-9\-\/]/g, " ").trim();
                this.setGroupingLabel.birth_date.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_DATE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setGroupingLabel.birth_date.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.BIRTH_DATE}`;
                this.setGroupingLabel.birth_date.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setGroupingLabel.birth_date.right_label = groupWords;
                return of(this.setGroupingLabel)
            }
        }
        return of(this.setGroupingLabel)
    }

    labelBloodType(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 5) {
                // const groupWords = this.suffixLabeling(stringLabel).replace(/[^A-Z\-\/]/g, " ").trim();
                const groupWords = this.suffixLabeling(stringLabel);
                console.log(groupWords)
                this.splitSingleLines(groupWords);
                console.log(this.splitSingleLines(groupWords));
                this.setGroupingLabel.blood_type.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.BLOOD_TYPE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${this.labelReplaceBloodTypeStats(groupWords)}`;
                this.setGroupingLabel.blood_type.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.BLOOD_TYPE}`;
                this.setGroupingLabel.blood_type.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setGroupingLabel.blood_type.right_label = this.labelReplaceBloodTypeStats(groupWords);
                return of(this.setGroupingLabel)
            }
        }
        return of(this.setGroupingLabel)
    }

    labelGenderType(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 5) {
                const groupWords = this.suffixLabeling(stringLabel)
                this.setGroupingLabel.gender.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.GENDER_TYPE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${this.labelReplaceGenderStats(groupWords)}`;
                this.setGroupingLabel.gender.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.GENDER_TYPE}`;
                this.setGroupingLabel.gender.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setGroupingLabel.gender.right_label = this.labelReplaceGenderStats(groupWords);
                return of(this.setGroupingLabel)
            }
        }
        return of(this.setGroupingLabel)
    }

    labelAddress(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 6) {
                const groupWords = this.suffixLabeling(stringLabel)
                this.setGroupingLabel.address.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.ADDRESS} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setGroupingLabel.address.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.ADDRESS}`;
                this.setGroupingLabel.address.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setGroupingLabel.address.right_label = groupWords;
                return of(this.setGroupingLabel)
            }
        }
        return of(this.setGroupingLabel)
    }

    labelRTRW(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 7) {
                const groupWords = `${stringLabel.words[1].text}${stringLabel.words[2].text}`;
                this.setGroupingLabel.rt_rw.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.RT_RW} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setGroupingLabel.rt_rw.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.RT_RW}`;
                this.setGroupingLabel.rt_rw.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setGroupingLabel.rt_rw.right_label = groupWords;
                return of(this.setGroupingLabel)
            }
        }
        return of(this.setGroupingLabel)
    }

    labelRT(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 7) {
                const groupWords = this.suffixLabeling(stringLabel).replace(/[^0-9]+/g, " ")
                this.setGroupingLabel.rt.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.RT} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setGroupingLabel.rt.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.RT}`;
                this.setGroupingLabel.rt.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setGroupingLabel.rt.right_label = this.splitTrailingSpace(groupWords)[1];
                return of(this.setGroupingLabel)
            }
        }
        return of(this.setGroupingLabel)
    }

    labelRW(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 7) {
                const groupWords = this.suffixLabeling(stringLabel).replace(/[^0-9]+/g, " ");
                this.setGroupingLabel.rw.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.RW} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setGroupingLabel.rw.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.RW}`;
                this.setGroupingLabel.rw.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setGroupingLabel.rw.right_label = this.splitTrailingSpace(groupWords)[2]
                return of(this.setGroupingLabel)
            }
        }
        return of(this.setGroupingLabel)
    }

    labelVillage(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 8) {
                const groupWords = this.suffixLabeling(stringLabel).replace(/[^A-Z]/g, " ").trim();
                this.setGroupingLabel.village.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.VILLAGE} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setGroupingLabel.village.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.VILLAGE}`;
                this.setGroupingLabel.village.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setGroupingLabel.village.right_label = groupWords;
                return of(this.setGroupingLabel)
            }
        }
        return of(this.setGroupingLabel)
    }

    labelSubDistrict(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 9) {
                const groupWords = `${stringLabel.words[2].text.replace(/[^a-zA-Z]/gm, " ").trim()}`;
                this.setGroupingLabel.subdistrict.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.SUBDISTRICT} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setGroupingLabel.subdistrict.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.SUBDISTRICT}`;
                this.setGroupingLabel.subdistrict.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setGroupingLabel.subdistrict.right_label = groupWords;
                return of(this.setGroupingLabel)
            }
        }
        return of(this.setGroupingLabel)
    }

    labelReligion(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 10) {
                const groupWords = this.suffixLabeling(stringLabel)
                this.setGroupingLabel.religion.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.RELIGION} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${this.labelReplaceReligionStats(groupWords)}`;
                this.setGroupingLabel.religion.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.RELIGION}`;
                this.setGroupingLabel.religion.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setGroupingLabel.religion.right_label = this.labelReplaceReligionStats(groupWords);
                return of(this.setGroupingLabel)
            }
        }
        return of(this.setGroupingLabel)
    }

    labelMartialStatus(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 11) {
                const groupWords = this.suffixLabeling(stringLabel).replace(/[^A-Z]/gm, " ").trim();
                this.setGroupingLabel.martial_status.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.MARTIAL_STATUS} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${this.labelReplaceMartialStats(groupWords)}`;
                this.setGroupingLabel.martial_status.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.MARTIAL_STATUS}`;
                this.setGroupingLabel.martial_status.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setGroupingLabel.martial_status.right_label = this.labelReplaceMartialStats(groupWords);
            }
            return of(this.setGroupingLabel)
        }
        return of(this.setGroupingLabel)
    }

    labelWork(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 12) {
                const groupWords = this.suffixLabeling(stringLabel).replace(/[^A-Z]/gm, " ").trimStart();
                this.setGroupingLabel.work.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.WORK} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setGroupingLabel.work.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.WORK}`;
                this.setGroupingLabel.work.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setGroupingLabel.work.right_label = this.removeFirstChar(groupWords);
            }
            return of(this.setGroupingLabel)
        }
        return of(this.setGroupingLabel)
    }

    labelNationaly(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 13) {
                const groupWords = this.suffixLabeling(stringLabel).replace(/[^A-Z]/gm, " ").trim();
                this.setGroupingLabel.nationaly.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.NATIONALITY} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setGroupingLabel.nationaly.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.NATIONALITY}`;
                this.setGroupingLabel.nationaly.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setGroupingLabel.nationaly.right_label = this.labelReplaceNationaly(groupWords);
            }
            return of(this.setGroupingLabel)
        }
        return of(this.setGroupingLabel)
    }

    labelValidUntil(position: number, stringLabel: OcrLinesModel): Observable<OcrGroupLabelingModel> {
        if (stringLabel !== undefined) {
            if (position === 14) {
                const groupWords = this.suffixLabeling(stringLabel).replace(/[^A-Z]/gm, " ").trim();
                this.setGroupingLabel.valid_until.group_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.VALID_UNTIL} ${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS} ${groupWords}`;
                this.setGroupingLabel.valid_until.left_label = `${OCR_CONFIG.LABELING_CLASSIFICATION.VALID_UNTIL}`;
                this.setGroupingLabel.valid_until.separator = `${OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS}`;
                this.setGroupingLabel.valid_until.right_label = groupWords;
                return of(this.setGroupingLabel)
            }
        }
        return of(this.setGroupingLabel)
    }

    labelReplaceMartialStats(isWords: string) {
        if (isWords.includes('KAW')) {
            isWords = OCR_CONFIG.MARTIAL_STATUS_CLASSIFICATION.KAWIN;
        }
        if (isWords.includes('BEL')) {
            isWords = OCR_CONFIG.MARTIAL_STATUS_CLASSIFICATION.BELUM_KAWIN;
        }
        if (isWords.includes('MAT')) {
            isWords = OCR_CONFIG.MARTIAL_STATUS_CLASSIFICATION.CERAI_MATI;
        }
        if (isWords.includes('HID')) {
            isWords = OCR_CONFIG.MARTIAL_STATUS_CLASSIFICATION.CERAI_HIDUP;
        }
        return isWords
    }

    labelReplaceReligionStats(isWords: string) {
        if (isWords.includes("ISL")) {
            isWords = OCR_CONFIG.RELIGION_TYPE_CLASSIFICATION.ISLAM
        }
        if (isWords.includes(":IS")) {
            isWords = OCR_CONFIG.RELIGION_TYPE_CLASSIFICATION.ISLAM
        }
        if (isWords.includes("KRI")) {
            isWords = OCR_CONFIG.RELIGION_TYPE_CLASSIFICATION.KRISTEN
        }
        if (isWords.includes("KAT")) {
            isWords = OCR_CONFIG.RELIGION_TYPE_CLASSIFICATION.KATHOLIK
        }
        if (isWords.includes("BUD")) {
            isWords = OCR_CONFIG.RELIGION_TYPE_CLASSIFICATION.BUDHA
        }
        if (isWords.includes("KON")) {
            isWords = OCR_CONFIG.RELIGION_TYPE_CLASSIFICATION.KONGHUCU
        }

        return isWords
    }

    labelReplaceGenderStats(isWords: string) {
        if (isWords.includes('LAK')) {
            isWords = OCR_CONFIG.GENDER_TYPE_CLASSIFICATION.LK
        }
        if (isWords.includes('PER')) {
            isWords = OCR_CONFIG.GENDER_TYPE_CLASSIFICATION.PM
        }
        return isWords
    }

    labelReplaceNationaly(isWords: string) {
        if (isWords.includes('WN')) {
            isWords = OCR_CONFIG.NATIONALITY_TYPE_CLASSIFICATION.WNI
        } else {
            isWords = OCR_CONFIG.NATIONALITY_TYPE_CLASSIFICATION.WNA
        }
        return isWords
    }

    labelReplaceBloodTypeStats(isWords: string) {
        console.log(isWords)
        if (isWords.includes('-') && isWords.includes('Gol')) {
            if (isWords.includes('A')) {
                isWords = OCR_CONFIG.BLOOD_TYPE_CLASSIFICATION.A
            }
            if (isWords.includes('B')) {
                isWords = OCR_CONFIG.BLOOD_TYPE_CLASSIFICATION.B
            }
            if (isWords.includes('AB')) {
                isWords = OCR_CONFIG.BLOOD_TYPE_CLASSIFICATION.AB
            }
            if (isWords.includes('O')) {
                isWords = OCR_CONFIG.BLOOD_TYPE_CLASSIFICATION.O
            }
        } else {
            return '-'
        }
        return isWords
    }

    suffixLabeling(isLabeling: OcrLinesModel, isPrefixer?: string) {
        let array = isLabeling.words;
        let newLabeling: any = [];
        let separator = " ";
        let dots = OCR_CONFIG.LABELING_CLASSIFICATION.SEPARATOR_CLASSIFICATION.DOTS;

        for (let i = 0; i < array.length; i++) {
            newLabeling += array[i].text;
            if (i < array.length - 1) {
                newLabeling += separator;
                let matches = newLabeling.match(/:/g);
                if (matches! == null) {
                    newLabeling += `${dots} `;
                }
            } else if (i === 0) {
                if (array[i].text.includes(`${isPrefixer}`) || array[i].text.includes(`${isPrefixer} :`)) {
                    newLabeling = " "
                }
            }
        }

        return newLabeling;
    }

    splitSingleLines(strLine: string) {
        const splitLine = strLine.split("Go");
        console.log(splitLine);
        return strLine
    }

    splitTrailingSpace(stringSlash: string) {
        return stringSlash.split(" ");
    }

    containsWhitespace(str: string) {
        return /\s/.test(str);
    }

    removeFirstChar(str: string) {
        return str.charAt(0).substr(0, 1) + str
    }

}

