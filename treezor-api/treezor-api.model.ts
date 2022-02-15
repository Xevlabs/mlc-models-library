import { TitleEnum } from '../user/title.enum';
import { IncomeRangeEnum } from '../enums/income-range.enum';
import { TreezorApiUserStatusEnum } from '../enums/treezor-api-user-status.enum';
import { TreezorApiWalletStatusEnum } from '../enums/treezor-api-wallet-status.enum';

export interface TreezorAuthRequestModel {
    grant_type: 'client_credentials',
    client_id: string,
    client_secret: string
}

export interface TreezorAuthResponseModel {
    token_type: string,
    expires_in: number,
    access_token: string,
}

export interface TreezorApiUserFormModel extends Omit<TreezorApiUserEditionFormModel, 'userTypeId'> {
    userTypeId: 1,
    userTag: string,
    userStatus?: TreezorApiUserStatusEnum
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
    country: string,
    phone: string,
    placeOfBirth: string,
    birthCountry: string,
    incomeRange: IncomeRangeEnum,
    nationality: string,
    legalSector: string,
    userTypeId?: string,
}

export interface TreezorApiUserModel {
    userId: string,
    userTypeId: '1',
    userStatus: TreezorApiUserStatusEnum,
    specifiedUSPerson: boolean,
    title: TitleEnum,
    firstname: string,
    lastname: string,
    userTag: string,
    kycLevel: string,
    kycReview: string,
    kycReviewComment: string,
    walletCount: number
}

export interface TreezorApiKycReviewUserModel {
    userId: string,
    userTypeId: '1',
    kycLevel: string,
    kycReview: string,
    kycReviewComment?: string
}

export interface TreezorApiWalletFormModel {
    walletTypeId: 10,
    tariffId: string,
    userId: string,
    currency: 'EUR',
    eventName: string
}

export interface TreezorApiWalletModel extends Omit<TreezorApiWalletFormModel, 'currency'> {
    walletId: string,
    walletStatus: TreezorApiWalletStatusEnum,
    jointUserId: string,
    walletTag: string,
    eventDate: string,
    eventMessage: string,
    eventAlias: string,
    eventPayinStartDate: string,
    eventPayinEndDate: string,
    contractSigned: boolean,
    urlImage: string,
    createdDate: string,
    modifiedDate: string,
    userFirstname: string,
    userLastName: string,
    codeStatus: string,
    informationStatus: string,
    payinCount: number,
    payoutCount: number,
    transferCount: number,
    bic: string,
    iban: string,
    solde: number,
    authorizedBalance: number,
    totalRows: number
}

export interface TreezorKycUrlResponseModel {
    identification: {
        'identification-id': string,
        'identification-url': string
    }
}

export interface TreezorKycDocumentUrlResponseModel {
    url: string;
}
