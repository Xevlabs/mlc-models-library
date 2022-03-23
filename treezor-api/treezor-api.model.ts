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

export interface TreezorApiKycReviewUserModel {
    userId: string,
    userTypeId: '1',
    kycLevel: number,
    kycReview: number,
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
