import WorkplaceAttribute from "@core/model/workplaceAttribute.model";

export default class BEAttribute {
    id:number = 0;
    employeeId: number = 0;
    isOwner!: boolean;
    approved!: boolean;
    wpAll!: boolean;
    wp: WorkplaceAttribute[] = [];
}