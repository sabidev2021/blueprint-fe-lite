import {PositionModel} from "./position.model";

export class ProfilePersonal {
    email!: string;
    employeeId!: number;
    photofileId?: string;
    fullName!: string;
    ktp?: string;
    phone!: string;
    photoUri?: string;
    positionId?: number;
    positionName?: string;
    position?: PositionModel;
    signatureFileId?: string;
    signatureUri?: string;
}
