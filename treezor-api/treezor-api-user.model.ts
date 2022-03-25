import { TitleEnum } from '../user/title.enum';
import { IncomeRangeEnum } from '../enums/income-range.enum';
import { TreezorApiUserStatusEnum } from '../enums/treezor-api-user-status.enum';
import { TreezorApiParentTypeEnum } from '../enums/treezor-api-parent-type.enum';
import { JuridicCategoryEnum } from '../enums/juridic-category.enum';
import { CountryIsoEnum } from '../enums/country-iso.enum';
import { BusinessSectorEnum } from '../enums/business-sector.enum';
import { AnnualTurnoverEnum } from '../enums/annual-turnover.enum';
import { NumberOfEmployeeRangeEnum } from '../enums/number-of-employee-range.enum';
import { PersonalAssetsRangeEnum } from '../enums/personal-assets-range.enum';
import { LanguageIsoEnum } from '../enums/language-iso.enum';
import { TimeZoneEnum } from '../enums/time-zone.enum';
import { LegalNetIncomeRangeEnum } from '../enums/legal-net-income-range.enum';

export interface TreezorApiCompanyFormModel {
    userTypeId: 2 | 3 | 4,
    userTag: string,
    specifiedUSPerson: 0 | 1,
    address1: string,
    address2?: string,
    address3?: string,
    email: string,
    legalName: string,
    legalRegistrationNumber: string,
    legalTvaNumber: string,
    legalRegistrationDate: string,
    legalForm: JuridicCategoryEnum,
    legalShareCapital: string,
    legalAnnualTurnOver: AnnualTurnoverEnum,
    legalNumberOfEmployeeRange: NumberOfEmployeeRangeEnum,
    legalSector: BusinessSectorEnum,
    entityType?: 1 | 2 | 3 | 4 | 5,
    postcode: string,
    city: string,
    state?: string,
    country: CountryIsoEnum,
    phone: string,
    legalNetIncomeRange: LegalNetIncomeRangeEnum,
    effectiveBeneficiary?: number,
    language?: LanguageIsoEnum,
    activityOutsideEu?: 0 | 1,
    economicSanctions?: 0 | 1,
    residentCountriesSanctions?: 0 | 1,
    involvedSanctions?: 0 | 1,
    timezone?: TimeZoneEnum
}

export interface TreezorApiUserFormModel extends Omit<TreezorApiUserEditionFormModel, 'userTypeId'> {
    userTypeId: 1,
    userTag: string,
    userStatus?: TreezorApiUserStatusEnum,
    parentUserId?: string,
    controllingPersonType?: 0 | 1 | 2 | 3,
    effectiveBeneficiary?: number
}

export interface TreezorApiUserEditionFormModel {
    specifiedUSPerson: 0 | 1,
    title: TitleEnum,
    firstname: string,
    lastname: string,
    birthday: string,
    email: string,
    address1: string,
    address2?: string,
    address3?: string,
    postcode: string,
    city: string,
    state?: string,
    country: CountryIsoEnum,
    phone: string,
    placeOfBirth: string,
    birthCountry: CountryIsoEnum,
    incomeRange: IncomeRangeEnum,
    nationality: CountryIsoEnum,
    legalSector: BusinessSectorEnum,
    userTypeId?: 1
}

export interface TreezorApiUserModel {
    userId: string,
    userTypeId: 1 | 2 | 3 | 4,
    userStatus: TreezorApiUserStatusEnum,
    userTag: string,
    parentUserId: number | null,
    parentType: TreezorApiParentTypeEnum | null | '',
    title: TitleEnum,
    firstname: string,
    lastname: string,
    middleNames: string,
    birthday: string,
    email: string,
    address1: string,
    address2: string,
    address3: string | null,
    postcode: string,
    city: string,
    state: string,
    country: CountryIsoEnum,
    countryName: string,
    phone: string,
    mobile: string,
    nationality: CountryIsoEnum,
    nationalityOther: CountryIsoEnum | '',
    placeOfBirth: string,
    birthCountry: CountryIsoEnum,
    occupation: string,
    incomeRange: IncomeRangeEnum | null,
    legalName: string,
    legalNameEmbossed: string,
    legalRegistrationNumber: string,
    legalTvaNumber: string,
    legalRegistrationDate: string,
    legalForm: JuridicCategoryEnum | null,
    legalShareCapital: number,
    legalSector: BusinessSectorEnum | '',
    legalAnnualTurnOver: AnnualTurnoverEnum | '',
    legalNetIncomeRange: LegalNetIncomeRangeEnum | '',
    legalNumberOfEmployeeRange: NumberOfEmployeeRangeEnum | '',
    effectiveBeneficiary: number,
    position: string,
    personalAssets: PersonalAssetsRangeEnum | '',
    taxResidence: CountryIsoEnum | '',
    taxNumber: string,
    kycLevel: number,
    kycReview: number,
    kycReviewComment: string,
    isFreezed: boolean,
    language: LanguageIsoEnum | null | '',
    specifiedUSPerson: boolean,
    employeeType: 0 | 1 | 2,
    entityType: 0 | 1 | 2 | 3 | 4 | 5,
    controllingPersonType: number,
    activityOutsideEu: boolean | null,
    economicSanctions: boolean | null,
    residentCountriesSanctions: boolean | null,
    involvedSanctions: boolean | null,
    sanctionsQuestionnaireDate: string | null,
    timezone: TimeZoneEnum | null,
    createdDate: string,
    modifiedDate: string,
    sepaCreditorIdentifier: string | null,
    walletCount: number,
    payinCount: number,
    totalRows: number | null
}