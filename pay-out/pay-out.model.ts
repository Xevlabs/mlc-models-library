import { TreezorApiPayoutModel } from '../treezor-api/treezor-api-payout.model';
import { DbLinkModel } from '../common/common.model';
import { PopulatedBaseModel } from '../base/base.model';
import { BeneficiaryModel, ClientBeneficiaryModel } from '../beneficiary/beneficiary.model';
import { TreezorUserModel } from '../user/treezor-user.model';
import { PayoutRefundStatusEnum } from '../enums/payout-refund-status.enum';

export interface PayOutModel extends Omit<StrapiPayoutFormModel, 'treezorUser' | 'beneficiary' | 'created_by_user'>, PopulatedBaseModel {
    beneficiary?: BeneficiaryModel,
    treezorUser?: TreezorUserModel,
    validatedAt?: string
}

export interface StrapiPayoutFormModel extends Omit<TreezorApiPayoutModel, 'payoutId' | 'payoutTypeId' | 'walletId' | 'bankaccountId' | 'beneficiaryId' | 'amount' | 'partnerFee' | 'userId' | 'codeStatus' | 'payoutDate' | 'createdDate' | 'modifiedDate'> {
    payoutId: number,
    payoutTypeId: number,
    walletId: number,
    bankaccountId: number,
    beneficiaryId: number,
    amount: number,
    partnerFee: number,
    userId: number,
    codeStatus: number | null,
    treezorUser?: DbLinkModel,
    beneficiary?: DbLinkModel,
    created_by_user?: DbLinkModel,
    payoutDate: string | null,
    createdDate: string | null,
    modifiedDate: string | null,
    refundStatus: PayoutRefundStatusEnum,
}

export interface PayoutFormModel {
    amount: number,
    beneficiaryId: number,
    label?: string
}

export interface ClientPayoutModel extends Pick<PayOutModel, 'id' | 'amount' | 'created_at' | 'payoutStatus' | 'label' | 'validatedAt'> {
    beneficiary?: ClientBeneficiaryModel
}
