import { BaseModel } from '../base/base.model';
import { TransactionModel } from '../transaction/transaction.model';
import { ClientModel } from '../user/client.model';

export interface GhostDepositModel extends BaseModel, Omit<StrapiGhostDepositFormModel, 'user' | 'transaction'> {
    user: ClientModel,
    transaction: TransactionModel
}

export interface StrapiGhostDepositFormModel {
    value_eur: number,
    user: number,
    transaction: number,
    date: string,
    earnings_eur: number
}
