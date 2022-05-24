import { ClientInfoModel } from '../user/client-info.model';
import { BaseModel } from '../base/base.model';
import { GenderEnum } from '../enums/gender.enum';
import { TitleEnum } from '../user/title.enum';
import { SocioProfessionalCategoryEnum } from '../enums/socio-professional-category.enum';
import { IncomeRangeEnum } from '../enums/income-range.enum';
import { KycStatusEnum } from '../enums/kyc-status.enum';

export interface HubspotUserModel extends BaseModel, Omit<StrapiHubspotUserForm, 'clientInfo'> {
    clientInfo: ClientInfoModel
}

export interface StrapiHubspotUserForm extends Omit<HubspotUserCreationForm, 'title'> {
    gender: GenderEnum,
    contactId?: string,
    dealId?: string,
    clientInfo?: number,
    address?: string,
    country?: string,
    zipCode?: string,
    city?: string,
    dateOfBirth?: string,
    usCitizen?: boolean,
    socioProfessionalCategory?: SocioProfessionalCategoryEnum,
    incomeRange?: IncomeRangeEnum,
    accountDateOfCreation?: string,
    IBAN?: string,
    BIC?: string,
    kycStatus?: KycStatusEnum,
    dailyInterestRate?: number,
    totalTreezorWallet?: number
}

export interface HubspotUserCreationForm {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    title: TitleEnum
}
