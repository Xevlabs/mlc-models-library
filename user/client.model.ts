import { UserModel } from './user.model';
import { ClientInfoModel } from './client-info.model';
import { ClientKycModel } from './kyc/client-kyc.model';
import { AddressFormModel } from '../address/address.model';
import { SocioProfessionalCategoryEnum } from '../enums/socio-professional-category.enum';
import { BusinessSectorEnum } from '../enums/business-sector.enum';
import { DbLinkModel } from '../common/common.model';
import { IncomeRangeEnum } from '../enums/income-range.enum';
import { BaseProfileForm } from './profile.model';
import { TitleEnum } from './title.enum';
import { TreezorControllingPersonTypeEnum } from '../enums/treezor-controlling-person-type.enum';
import { CompanyModel } from '../company/company.model';
import { PatrimonyEnum } from '../enums/patrimony.enum';

export interface ClientModel extends UserModel {
    clientInfo: ClientInfoModel,
    clientKyc?: ClientKycModel,
    company?: CompanyModel
}

export interface ClientRegistrationFormModel extends Omit<ClientEditionFormModel, 'address'> {
    signedDocuments: DbLinkModel[],
    password: string,
    passwordConfirmation : string,
    address : AddressFormModel,
    companyUuid?: string,
    controllingPersonType?: TreezorControllingPersonTypeEnum,
    effectiveBeneficiary?: number
}

export interface StrapiExtendedClientEditionModel extends ClientEditionFormModel {
    username: string;
}

export interface ClientLimitedEditionFormModel {
    phone: string,
    email: string,
    incomeRange : IncomeRangeEnum,
    socioProfessionalCategory : SocioProfessionalCategoryEnum,
    patrimony: PatrimonyEnum
}

export interface ClientEditionFormModel extends ClientLimitedEditionFormModel {
    firstName: string,
    lastName: string,
    title : TitleEnum,
    address : DbLinkModel,
    dateOfBirth : string,
    placeOfBirth : DbLinkModel,
    cityOfBirth : string,
    nationality : DbLinkModel,
    usCitizen : boolean,
    businessSector? : BusinessSectorEnum,
    taxResidenceCountry: DbLinkModel,
    taxPayerId?: string,
    position: string,
    occupation: string
}

export interface StrapiClientProfileFormModel extends BaseProfileForm {
    clientInfo?: number,
    clientKyc?: DbLinkModel,
    provider: 'local',
    username: string,
    blocked: boolean,
    confirmed: boolean,
    updated_by_user?: DbLinkModel,
    company?: DbLinkModel
}

export interface ClientRegistrationResponseBodyModel {
    jwt: string,
    user: ClientModel,
    iban: string,
    treezorKycLivenessLink: string
}
