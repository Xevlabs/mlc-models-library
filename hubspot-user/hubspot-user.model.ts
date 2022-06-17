import { ClientInfoModel } from '../user/client-info.model';
import { BaseModel } from '../base/base.model';
import { GenderEnum } from '../enums/gender.enum';
import { TitleEnum } from '../user/title.enum';
import { SocioProfessionalCategoryEnum } from '../enums/socio-professional-category.enum';
import { IncomeRangeEnum } from '../enums/income-range.enum';
import { KycStatusEnum } from '../enums/kyc-status.enum';
import { MlcKycDocumentLevelEnum } from '../enums/mlc-kyc-document-level.enum';
import { TransactionStatusEnum } from '../enums/transaction-status.enum';
import { PatrimonyEnum } from '../enums/patrimony.enum';

export interface HubspotUserModel extends BaseModel, Omit<StrapiHubspotUserForm, 'clientInfo'> {
    clientInfo?: ClientInfoModel
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
    nationality?: string,
    patrimony?: PatrimonyEnum,
    accountDateOfCreation?: string,
    IBAN?: string,
    BIC?: string,
    kycStatus?: KycStatusEnum,
    dailyInterestRate?: number,
    totalTreezorWallet?: number,
    adjustedTreezorWallet?: number,
    authorizedTreezorWallet?: number,
    kycBasescore?: number,
    kycCurrentscore?: number,
    kycDocumentLevel?: MlcKycDocumentLevelEnum,
    lastTransactionStatus?: TransactionStatusEnum,
    lastTransactionDate?: string,
    lastTransactionAmount?: number
}

export interface HubspotUserCreationForm {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    title: TitleEnum
}
