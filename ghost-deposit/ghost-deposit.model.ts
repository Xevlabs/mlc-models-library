import { BaseModel } from '../base/base.model';
import { NonPopulatedTransactionModel } from '../transaction/transaction.model';
import { ClientModel } from '../user/client.model';
import { DbLinkModel } from '../common/common.model';

export interface GhostDepositModel extends BaseModel, Omit<StrapiGhostDepositFormModel, 'user' | 'transaction'> {
    user: ClientModel,
    transaction: NonPopulatedTransactionModel
}

export interface StrapiGhostDepositFormModel {
    value_eur: number,
    user: DbLinkModel,
    transaction: DbLinkModel,
    date: string,
    earnings_eur: number,
    mlcEarningsEur: number
}
