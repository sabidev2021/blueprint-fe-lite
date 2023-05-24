export enum BusinessDocTypeEnum {
    NIB='NIB',
    TDP='TDP',
    NO_DOC='NO_DOC'
}

export class Legal {
    aktaPendirianFile?: string;
    aktaPendirianFileId?: string;
    aktaPendirianNumber?: string;
    aktaPerubahanTerakhirFile?: string;
    aktaPerubahanTerakhirFileId?: string;
    aktaPerubahanTerakhirNumber?: string;
    beId?: number;
    businessDocTypeUsed?: BusinessDocTypeEnum;
    nibFileId?: string;
    nibNumber?: string;
    nib_file?: string;
    npwpFile?: string;
    npwpFileId?: string;
    npwpNumber?: string;
    siupFile?: string;
    siupFileId?: string;
    siupNumber?: string;
    skMenkumHamFile?: string;
    skMenkumHamFileId?: string;
    skMenkumhamNumber?: string;
    skdp_tdpFile?: string;
    skdp_tdpFileId?: string;
    skdp_tdpNumber?: string;

    updatedDate?: Date;
    createdDate?: Date;
}
