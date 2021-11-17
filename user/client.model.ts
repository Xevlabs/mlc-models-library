import { UserModel } from './user.model';
import { ClientInfoModel } from './client-info.model';
import { UserKycModel } from './user-kyc.model';
import { AddressFormModel } from '../address/address.model';
import { SocioProfessionalCategoryEnum } from '../enums/socio-professional-category.enum';
import { BusinessSectorEnum } from '../enums/business-sector.enum';
import { DbLinkModel } from '../common/common.model';
import { IncomeRangeEnum } from '../enums/income-range.enum';
import { BaseProfileForm } from './profile.model';
import { TitleEnum } from './title.enum';

export interface ClientModel extends UserModel {
    clientInfos: ClientInfoModel,
    clientKyc?: UserKycModel
}

export interface ClientRegistrationFormModel {
    firstName: string,
    lastName: string,
    title : TitleEnum,
    phone: string,
    email: string,
    address : AddressFormModel,
    dateOfBirth : string,
    placeOfBirth : DbLinkModel,
    cityOfBirth : string,
    nationality : DbLinkModel,
    usCitizen : boolean,
    incomeRange : IncomeRangeEnum,
    socioProfessionalCategory : SocioProfessionalCategoryEnum,
    businessSector : BusinessSectorEnum,
    signedDocuments: DbLinkModel[],
    password: string,
    passwordConfirmation : string
}

export interface ClientProfileFormModel extends BaseProfileForm {
    clientInfo: DbLinkModel,
    clientKyc?: DbLinkModel,
    username: string,
    blocked: boolean,
    confirmed: boolean
}

export interface ClientRegistrationResponseBodyModel {
    jwt: string,
    user: ClientModel,
    iban: string,
    kycLink: string
}
