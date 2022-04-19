import { BaseModel } from '../base/base.model';
import { TreezorUserModel } from './treezor-user.model';
import { DbLinkModel } from '../common/common.model';
import { AddressModel } from '../address/address.model';
import { NationalityModel } from '../nationality/nationality.model';
import { IncomeRangeEnum } from '../enums/income-range.enum';
import { SocioProfessionalCategoryEnum } from '../enums/socio-professional-category.enum';
import { BusinessSectorEnum } from '../enums/business-sector.enum';
import { ClientAccountStatusEnum } from '../enums/client-account-status.enum';
import { ClientModel } from './client.model';
import { CompanyModel } from '../company/company.model';
import { LanguageIsoEnum } from '../enums/language-iso.enum';
import { TimeZoneEnum } from '../enums/time-zone.enum';
import { PatrimonyEnum } from '../enums/patrimony.enum';

export interface ExtendedClientInfoModel extends ClientInfoModel {
    user?: ClientModel,
    company?: CompanyModel
}

export interface ClientInfoModel extends BaseModel, CommonClientInfoModel {
    treezorUser: TreezorUserModel,
    addresses: AddressModel[],
    mainAddress: AddressModel,
    nationality?: NationalityModel
}

export interface ClientInfoFormModel extends CommonClientInfoModel {
    user?: string,
    company?: string,
    treezorUser?: DbLinkModel,
    addresses: DbLinkModel[],
    mainAddress: DbLinkModel,
    nationality?: DbLinkModel,
    updated_by_user?: DbLinkModel
}

interface CommonClientInfoModel {
    bonusInterestRate: number,
    dateOfBirth?: string,
    usCitizen: boolean,
    incomeRange?: IncomeRangeEnum,
    socioProfessionalCategory?: SocioProfessionalCategoryEnum,
    businessSector?: BusinessSectorEnum,
    patrimony?: PatrimonyEnum,
    cityOfBirth?: string,
    accountStatus: ClientAccountStatusEnum,
    language?: LanguageIsoEnum,
    timezone?: TimeZoneEnum,
    onboardingDone: boolean
}
