import { UserModel } from './user.model';
import { ClientInfoModel } from './client-info.model';
import { ClientKycModel } from './client-kyc.model';
import { AddressFormModel } from '../address/address.model';
import { SocioProfessionalCategoryEnum } from '../enums/socio-professional-category.enum';
import { BusinessSectorEnum } from '../enums/business-sector.enum';
import { DbLinkModel } from '../common/common.model';
import { IncomeRangeEnum } from '../enums/income-range.enum';
import { BaseProfileForm } from './profile.model';
import { TitleEnum } from './title.enum';

export interface ClientModel extends UserModel {
    clientInfos: ClientInfoModel,
    clientKyc?: ClientKycModel
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
    nationality : string,
    usCitizen : boolean,
    incomeBracket : IncomeRangeEnum,
    socioProfessionalCategory : SocioProfessionalCategoryEnum,
    businessSector : BusinessSectorEnum,
    password: string,
    passwordConfirmation : string
}

export interface ClientProfileFormModel extends BaseProfileForm {
    clientInfos: DbLinkModel,
    clientKyc?: DbLinkModel
}