import { TreezorApiPayinStatusEnum } from '../enums/treezor-api-payin-status.enum';

export interface TreezorPayinModel {
    payinId: string
    payinTag: string,
    payinStatus: TreezorApiPayinStatusEnum,
    paymentMethodId: number,
    messageToUser: string,
    subtotalItems: string,
    subtotalServices: string,
    subtotalTax: string,
    amount: number,
    currency: string,
    createdDate: string | null,
    walletEventName: string,
    walletAlias: string,
    codeStatus: number,
    informationStatus: string,
    refundAmount: number,
    ibanFullname: string,
    DbtrIBAN: string,
    ibanBic: string,
    ibanTxEndToEndId: string,
    ibanTxId: string,
    forwardUrl: string,
    paymentAcceptedUrl: string,
    paymentRefusedUrl: string,
    paymentWaitingUrl: string,
    paymentExceptionUrl: string,
    paymentCanceledUrl: string,
    payinDate: string | null,
    mandateId: number,
    creditorName: string,
    creditorAddressLine: string,
    creditorCountry: string,
    creditorIban: string,
    creditorBIC: string,
    virtualIbanId: string,
    virtualIbanReference: string,
    additionalData: string,
    ibanId: string,
}

export interface StrapiTreezorPayinFormModel extends Omit<TreezorPayinModel, 'ibanFullname' | 'DbtrIBAN' | 'ibanBic' | 'creditorName' | 'creditorAddressLine' | ' creditorCountry' | 'creditorIban' | 'creditorBIC'> {
    treezorUser?: number,
    beneficiary?: number
}
