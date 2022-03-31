import { TreezorApiTransferStatusEnum } from '../enums/treezor-api-transfer-status.enum';

export interface TreezorApiPayoutModel {
    payoutId: string,
    payoutTag: string,
    payoutStatus: TreezorApiTransferStatusEnum,
    payoutTypeId: string,
    payoutType: string,
    walletId: string,
    bankaccountId: string,
    beneficiaryId: string,
    uniqueMandateReference: string | null,
    label: string,
    payoutDate: string,
    amount: string,
    currency: string,
    partnerFee: string,
    createdDate: string,
    modifiedDate: string,
    walletEventName: string,
    walletAlias: string,
    userLastName: string,
    userFirstName: string,
    userId: string,
    bankaccountIBAN: string,
    codeStatus: string,
    informationStatus: string,
    supportingFileLink: string
}

export interface TreezorApiPayoutFormModel {
    walletId: number,
    beneficiaryId: number,
    amount: number,
    currency: 'EUR',
    label: string,
    payoutTag: string,
    supportingFileLink: string
}
