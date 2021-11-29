import { TitleEnum } from '../user/title.enum';
import { IncomeRangeEnum } from '../enums/income-range.enum';
import { TreezorApiUserStatusEnum } from '../enums/treezor-api-user-status.enum';

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

export interface TreezorApiUserFormModel extends TreezorApiUserEditionFormModel {
    userTypeId: 1,
    userTag: string,
    userStatus?: TreezorApiUserStatusEnum
}

export interface TreezorApiUserEditionFormModel {
    specifiedUSPerson: boolean,
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
    legalSector: string
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
    walletStatus: string,
    jointUserId: string,
    bic: string,
    iban: string,
    solde: number,
    authorizedBalance: number
}

export interface TreezorKycUrlResponseModel {
    identification: {
        'identification-id': string,
        'identification-url': string
    }
}
