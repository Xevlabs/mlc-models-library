import { BaseModel } from '../base/base.model';
import { TreezorUserModel } from './treezor-user.model';
import { FireblocksUserModel } from './fireblocks-user.model';
import { DbLinkModel } from '../common/common.model';
import { AddressModel } from '../address/address.model';
import { NationalityModel } from '../nationality/nationality.model';
import { IncomeRangeEnum } from '../enums/income-range.enum';
import { SocioProfessionalCategoryEnum } from '../enums/socio-professional-category.enum';
import { BusinessSectorEnum } from '../enums/business-sector.enum';
import { ClientAccountStatusEnum } from '../enums/client-account-status.enum';

export interface ClientInfoModel extends BaseModel, CommonClientInfoModel {
    treezorUser: TreezorUserModel,
    fireblocksUser: FireblocksUserModel,
    addresses: AddressModel[],
    mainAddress: AddressModel,
    nationality: NationalityModel
}

export interface ClientInfoFormModel extends CommonClientInfoModel {
    treezorUser?: DbLinkModel,
    fireblocksUser?: DbLinkModel,
    addresses: DbLinkModel[],
    mainAddress: DbLinkModel,
    nationality: DbLinkModel
}

interface CommonClientInfoModel {
    bonusInterestRate: number,
    dateOfBirth: string,
    usCitizen: boolean,
    incomeRange: IncomeRangeEnum,
    socioProfessionalCategory: SocioProfessionalCategoryEnum,
    businessSector: BusinessSectorEnum,
    cityOfBirth: string,
    accountStatus: ClientAccountStatusEnum
}
