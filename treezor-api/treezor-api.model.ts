import { TitleEnum } from '@/typings/user/title.enum';
import { TreezorKycLevelEnum } from '@/typings/enums/treezor-kyc-level.enum';
import { TreezorKycReviewStatusEnum } from '@/typings/enums/treezor-kyc-review-status.enum';

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

export interface TreezorApiUserFormModel {
    userTypeId: 1,
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
    state: string,
    country: string,
    phone: string,
    userTag: string
}

export interface TreezorApiUserModel {
    userId: string,
    userTypeId: 1,
    userStatus: string,
    specifiedUSPerson: boolean,
    title: TitleEnum,
    firstname: string,
    lastname: string,
    kycLevel: TreezorKycLevelEnum,
    kycReview: TreezorKycReviewStatusEnum
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
