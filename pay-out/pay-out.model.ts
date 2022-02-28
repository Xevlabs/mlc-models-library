import { TreezorApiPayoutModel } from '../treezor-api/treezor-api-payout.model';
import { DbLinkModel } from '../common/common.model';
import { PopulatedBaseModel } from '../base/base.model';
import { BeneficiaryModel } from '../beneficiary/beneficiary.model';
import { TreezorUserModel } from '../user/treezor-user.model';

export interface PayOutModel extends Omit<StrapiPayoutFormModel, 'treezorUser' | 'beneficiary' | 'created_by_user'>, PopulatedBaseModel {
    beneficiary?: BeneficiaryModel,
    treezorUser?: TreezorUserModel
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
    codeStatus: number,
    treezorUser?: DbLinkModel,
    beneficiary?: DbLinkModel,
    created_by_user?: DbLinkModel,
    payoutDate: string | null,
    createdDate: string | null,
    modifiedDate: string | null
}

export interface PayoutFormModel {
    amount: number,
    beneficiaryId: number
}
