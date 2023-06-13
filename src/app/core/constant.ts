export const HTTP_CONTENT_TYPE = {
    X_FORM: 'application/x-www-form-urlencoded',
    MULTI_PART: 'multipart/form-data',
    JSON: 'application/json'
}

export const ERROR_MESSAGES = {
    USER: 'Oops! ada kesalahan pada sistem!'
}

export const DATE_FORMAT = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'dd-MM-YYYY',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY',
    },
};

export const DATE_FORMAT_WITH_INPUT = {
    parse: {
        dateInput: 'DD-MM-YYYY', // this is how your date will be parsed from Input
    },
    display: {
        dateInput: 'DD-MM-YYYY', // this is how your date will get displayed on the Input
        monthYearLabel: 'MMMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    }
};

export class Constants {
    static readonly DATE_INDONESIAN = 'dd-MM-yyyy';
    static readonly DATE_TIME_FMT = `${Constants.DATE_INDONESIAN} hh:mm:ss`;
}

export const PICTURE_FLAGS = {
    ACTIVE_PROFILE_PIC: 'activeProfilePic',
    ACTIVE_COMPANY_LOGO: 'activeCompanyLogo',
    ACTIVE_EMPLOYEE_SIGNATURE: 'activeEmployeeSignature'
}

export const PICTURE_FORMAT_ALLOWED = {
    PNG: 'image/png',
    JPEG: 'image/jpeg',
    JPG: 'image/jpg',
    PDF: 'application/pdf',
    MAXSIZE: 'Ukuran gambar melebihi 2Mb',
    MESSAGES: 'Tipe gambar harus JPG/JPEG/PNG',
}

export const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
export const FILE_SIZE_UNITS_LONG = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Pettabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];


export const CONFIG_FILE_MESSAGES = {
    TYPE: {
        DOC: {
            ALLOWED: 'Tipe file harus format PDF',
            MAXSIZE: 'Max file size 5mb'
        },
        PICTURE: {
            ALLOWED: PICTURE_FORMAT_ALLOWED,
        }
    }
}

export const OCR_CONFIG = {
    LANG: {
        EN: 'eng',
        ID: 'ind'
    },
    MARTIAL_STATUS_CLASSIFICATION: {
        BELUM_KAWIN: 'BELUM KAWIN',
        KAWIN: 'KAWIN',
        CERAI_HIDUP: 'CERAI_HIDUP',
        CERAI_MATI: 'CERAI MATI'
    },
    BLOOD_TYPE_CLASSIFICATION: {
        A: 'A',
        B: 'B',
        AB: 'AB',
        O: 'O'
    },
    GENDER_TYPE_CLASSIFICATION: {
        LK: 'LAKI-LAKI',
        PM: 'PEREMPUAN',
    },
    RELIGION_TYPE_CLASSIFICATION: {
        ISLAM: 'ISLAM',
        KATHOLIK: 'KATHOLIK',
        KRISTEN: 'KRISTEN',
        BUDHA: 'BUDHA',
        KONGHUCU: 'KONGHUCU',
    },
    VALID_UNTIL_TYPE_CLASSIFICATION: {
        LIFE_TIME: 'SEUMUR HIDUP'
    },
    NATIONALITY_TYPE_CLASSIFICATION: {
        WNI: 'WNI',
        WNA: 'WNA'
    },
    LABELING_CLASSIFICATION : {
        NIK: 'NIK :',
        NAME: 'Nama :',
        BIRTH_PLACE_BIRTH_DATE: 'Tempat/Tgl Lahir :',
        GENDER_TYPE: 'Jenis Kelamin :',
        BLOOD_TYPE: 'Gol.Darah :',
        ADDRESS: 'Alamat :',
        RT_RW: 'RT/RW :',
        VILLAGE: 'Kel/Desa :',
        SUBDISTRICT: 'Kecamatan :',
        RELIGION: 'Agama :',
        MARTIAL_STATUS: 'Status Perkawinan :',
        WORK: 'Pekerjaan :',
        NATIONALITY: 'Kewarganegaraan :',
        VALID_UNTIL: 'Berlaku Hingga :',
        PROVINCE: 'Provinsi :',
        CITY: 'Kota :',
        DATE_CREATED: 'Tanggal Dibuat :'
    }
}
