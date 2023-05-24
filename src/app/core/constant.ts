export const BUSSINES_TYPE = {
  ID: {
    BE_INDIVIDU: 1,
    BE_PERUSAHAAN: 2
  },
  BE_INDIVIDU: 'INDIVIDU',
  BE_PERUSAHAAN: 'CORPORATE'
}

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
  MESSAGES: 'Tipe gambar harus JPG/JPEG/PNG',
}
