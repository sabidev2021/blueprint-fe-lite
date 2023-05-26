export class AddresData {
    addressId!: number;
    country!: string;
    building!: string;
    street!: string;
    province!: string;
    city!: string;
    district!: string;
    subDistrict!: string;
    postalCode!: string;
    fullAddress: string = this.building + this.street + this.district + this.subDistrict + this.city + this.postalCode + this.province + this.country;
}
