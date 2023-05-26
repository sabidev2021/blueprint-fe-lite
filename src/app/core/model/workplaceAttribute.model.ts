import WarehouseAttribute from "@core/model/warehouseAttribute.model";

export default class WorkplaceAttribute {
    id:number = 0;
    whAll!: boolean;
    wh:WarehouseAttribute[] = [];
}