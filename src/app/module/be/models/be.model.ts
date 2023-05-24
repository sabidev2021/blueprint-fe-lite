import {AddresData} from "./address.model";

export enum BeTypeEnum {
  PERSONAL,
  CORPORATE
}

export class BusinessEntity {
  beId = 0;
  beName = '';
  uriLogo = '';
  companyTypeId = 0;
  businessTypeId = 0;
  businessCategoryId = 0;
  addresId = 0;
  beType: BeTypeEnum = BeTypeEnum.CORPORATE;
  bePhone = '';
  beEmail = '';
  beVerified = false;
  msidnNumber = '';
  website = '';
  subsidiaries = '';
  faxNumber = '';
  socialMedia = '';
  logoFileId = '';
  workplaceId = 0;
  employeePositionId = 0;
  userPhone = '';
  userId = '';
  connectionId = 0;
  userEmail = '';
  emailRecipient = '';
  mitraIdRecipient = 0;
  addressData: AddresData = new AddresData();

  public setAddressData(address: AddresData) {
    this.addressData = new AddresData();
    this.addressData.addressId = address.addressId;
    this.addressData.building = address.building;
    this.addressData.city = address.city;
    this.addressData.country = address.country;
    this.addressData.district = address.district;
    this.addressData.postalCode = address.postalCode;
    this.addressData.province = address.province;
    this.addressData.street = address.street;
    this.addressData.subDistrict = address.subDistrict;
  }
}
