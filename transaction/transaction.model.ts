import { DbLinkModel } from '../common/common.model';
import { TransactionTypeEnum } from '../enums/transaction-type.enum';
import { BaseModel, PopulatedBaseModel } from '../base/base.model';
import { TransactionStatusEnum } from '../enums/transaction-status.enum';
import { TreezorTransferModel } from '../treezor-transfer/treezor-transfer.model';
import { TransactionErrorModel } from '../transaction-error/transaction-error.model';
import {
    FireblocksTransactionModel,
    SimplifiedFireblocksTransactionModel
} from '../fireblocks-transaction/fireblocks-transaction.model';
import { ClientModel } from '../user/client.model';
import { TransactionHistoryModel } from '../transaction-history/transaction-history.model';

export interface TransactionModel extends BaseTransactionModel, PopulatedBaseModel {
    user: ClientModel
}

export interface NonPopulatedTransactionModel extends BaseTransactionModel, BaseModel {
    user: number
}

interface BaseTransactionModel extends Omit<StrapiTransactionFormModel, 'created_by_user' | 'updated_by_user' | 'user'> {
    treezorTransfers?: TreezorTransferModel[],
    fireblocksTransactions?: FireblocksTransactionModel[],
    transactionErrors?: TransactionErrorModel[],
    transactionHistories?: TransactionHistoryModel[]
}

export interface StrapiTransactionFormModel extends TransactionFormModel{
    type: TransactionTypeEnum,
    status: TransactionStatusEnum,
    currency: 'EUR',
    user: DbLinkModel,
    created_by_user?: DbLinkModel,
    mlcEstimatedEarnings?: number,
    mlcFinalEarnings?: number,
    mlcEarningsAsset?: string
}

export interface TransactionFormModel {
    amount: number
}

export interface StrapiTransactionAndErrorsModel {
    transaction: TransactionModel,
    newErrors: TransactionErrorModel[]
}

export interface SimplifiedTransactionModel {
    linkedTransactionId: number,
    value: number,
    hasErrors: boolean
}

export interface SimplifiedTransactionWithFireblocksModel extends SimplifiedTransactionModel {
    fireBlocksTransactions?: SimplifiedFireblocksTransactionModel[]
}

export interface TransactionDetailsModel extends Omit<TransactionModel, 'user' | 'updated_by_user' | 'created_at' | 'updated_at' | 'treezorTransfers' | ' fireblocksTransactions'> {
    date_of_demand: string,
    date_of_completion?: string,
    investedAmount?: number,
    clientEurEarnings?: number,
    days_of_investment?: number,
    mlcFinalEarnings?:  number,
    movements: {
        treezorCommonWallet?: Partial<TreezorTransferModel>[],
        fireblocksCommonWallet?: Partial<FireblocksTransactionModel>[],
        fireblocksPrivateWallet?: Partial<FireblocksTransactionModel>[]
    }
}
