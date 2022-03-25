import { TreezorApiParentTypeEnum } from '../enums/treezor-api-payout-refund-status.enum';

export interface TreezorApiPayoutRefundModel {
    id: string,
    tag: string,
    codeStatus: string,
    informationStatus: TreezorApiParentTypeEnum,
    payoutId: string,
    requestAmount: string,
    requestCurrency: 'EUR',
    requestComment: string,
    reasonCode: string,
    refundAmount: string,
    refundCurrency: string,
    refundDate: string | null;
    refundComment: string,
    createdDate: string,
    modifiedDate: string | null
}
