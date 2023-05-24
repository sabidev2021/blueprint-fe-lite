import {Injectable} from '@angular/core';
import {HttpClientService} from "@core/http/http-client.service";
import {BeTypeEnum, BusinessEntity} from "@app/module/be/models/be.model";
import {SabiBaseService} from "@core/base/sabi-base.service";
import {DbLocalService} from "@core/dblocal/db-local.service";
import {AddressService} from "@app/module/be/address.service";
import {BeSalesModel} from "@app/module/be/models/be-sales.model";
import {CompanyType} from "@app/module/be/models/company-type.model";

@Injectable()
export class BeService extends SabiBaseService<BusinessEntity> {

  constructor(httpClient: HttpClientService, db: DbLocalService, private addressService: AddressService) {
    super('company-service', 'be', httpClient, db)
  }

  initBe(value: any, be_type: BeTypeEnum) {
    const setBe = new BusinessEntity();
    setBe.beId = 0;
    setBe.beName = be_type == BeTypeEnum.PERSONAL ? value.nama_usaha : value.nama_perusahaan;
    setBe.beType = be_type;
    setBe.businessCategoryId = 1;
    setBe.businessTypeId = 1;
    setBe.companyTypeId = 0;
    setBe.employeePositionId = be_type == BeTypeEnum.PERSONAL ? 0 : value.jabatan;
    setBe.logoFileId = value.temp_image;
    setBe.bePhone = '';
    setBe.userPhone = value.no_ponsel;
    setBe.uriLogo = "";
    setBe.userEmail = "";
    setBe.userId = "";
    setBe.workplaceId = 0;
    return setBe;
  }

  removeReferral() {
    this.db.clear();
  }

  getBeSalesProfile(recipientWorkplaceId: number, recipientMitraId: number) {
    return this.httpClient.get<BeSalesModel>(this.serviceName, 'get-invoice-be', `be/sales-profile/${recipientWorkplaceId}/${recipientMitraId}`)
  }

  getBeSalesSignature() {
    return this.httpClient.get<BeSalesModel>(this.serviceName, 'get-signature-be', `employee/signature`)
  }

  getBe(beId: number) {
    return this.httpClient.get<BusinessEntity>(this.serviceName, 'get-be', `/be/${beId}`)
  }

  getCompanyTypeList() {
    return this.httpClient.get<CompanyType>(this.serviceName, 'get-company-type-list', `be/company-type`)
  }

  getCompanyType(companyTypeId: number) {
    return this.httpClient.get<CompanyType>(this.serviceName, 'get-company-type', `be/company-type/${companyTypeId}`)
  }

}

