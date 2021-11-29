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

export interface ClientModel extends UserModel {
    clientInfo: ClientInfoModel,
    clientKyc?: ClientKycModel
}

export interface ClientRegistrationFormModel extends Omit<ClientEditionFormModel, 'address'> {
    signedDocuments: DbLinkModel[],
    password: string,
    passwordConfirmation : string,
    address : AddressFormModel
}

export interface ClientEditionFormModel {
    firstName: string,
    lastName: string,
    title : TitleEnum,
    phone: string,
    email: string,
    address : DbLinkModel,
    dateOfBirth : string,
    placeOfBirth : DbLinkModel,
    cityOfBirth : string,
    nationality : DbLinkModel,
    usCitizen : boolean,
    incomeRange : IncomeRangeEnum,
    socioProfessionalCategory : SocioProfessionalCategoryEnum,
    businessSector : BusinessSectorEnum
}

export interface StrapiClientProfileFormModel extends BaseProfileForm {
    clientInfo: number,
    clientKyc?: DbLinkModel,
    provider: 'local',
    username: string,
    blocked: boolean,
    confirmed: boolean
}

export interface ClientRegistrationResponseBodyModel {
    jwt: string,
    user: ClientModel,
    iban: string,
    treezorKycLivenessLink: string
}
