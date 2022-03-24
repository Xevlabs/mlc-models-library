import { DbLinkModel, TimestampModel } from '../common/common.model';
import { UserModel } from '../user/user.model';
import { JuridicCategoryEnum } from '../enums/juridic-category.enum';
import { AnnualTurnoverEnum } from '../enums/annual-turnover.enum';
import { NumberOfEmployeeRangeEnum } from '../enums/number-of-employee-range.enum';
import { ClientInfoModel } from '../user/client-info.model';
import { ClientKycModel } from '../user/kyc/client-kyc.model';
import { CompanyTypeEnum } from '../enums/company-type.enum';
import { CompanyEntityTypeEnum } from '../enums/company-entity-type.enum';
import { LanguageIsoEnum } from '../enums/language-iso.enum';
import { BusinessSectorEnum } from '../enums/business-sector.enum';
import { TimeZoneEnum } from '../enums/time-zone.enum';
import { AddressFormModel } from '../address/address.model';
import { ClientModel } from '../user/client.model';
import { LegalNetIncomeRangeEnum } from '../enums/legal-net-income-range.enum';


export interface CompanyModel extends TimestampModel, StrapiCompanyBase {
    id: string,
    uuid: string,
    clientInfo: ClientInfoModel,
    clientKyc: ClientKycModel,
    blocked: boolean,
    confirmed: boolean,
    updated_by_user?: UserModel,
    created_by_user: UserModel,
    users?: ClientModel[]
}

export interface CompanyFormModel extends StrapiCompanyBase {
    usCitizen: boolean,
    address : AddressFormModel,
    legalSector: BusinessSectorEnum,
    language?: LanguageIsoEnum,
    timezone?: TimeZoneEnum
}

interface StrapiCompanyBase {
    companyType: CompanyTypeEnum,
    email: string,
    phone: string,
    legalName: string,
    legalRegistrationNumber: string,
    legalTvaNumber: string,
    legalRegistrationDate: string,
    legalForm: JuridicCategoryEnum,
    legalShareCapital: number,
    legalAnnualTurnOver: AnnualTurnoverEnum,
    legalNumberOfEmployeeRange: NumberOfEmployeeRangeEnum,
    entityType?: CompanyEntityTypeEnum,
    legalNetIncomeRange: LegalNetIncomeRangeEnum,
    activityOutsideEu?: boolean,
    economicSanctions?: boolean,
    residentCountriesSanctions?: boolean,
    involvedSanctions?: boolean
}

export interface StrapiCompanyFormModel extends StrapiCompanyBase {
    uuid: string,
    blocked: boolean,
    confirmed: boolean,
    created_by_user: DbLinkModel
}

export interface CompanyCreationResponseBodyModel {
    company: CompanyModel,
    iban: string,
    uuid: string
}
