import { DbLinkModel } from '../common/common.model';
import { TransactionTypeEnum } from '../enums/transaction-type.enum';
import { BaseModel } from '../base/base.model';
import { TransactionStatusEnum } from '../enums/transaction-status.enum';
import { TreezorTransferModel } from '../treezor-transfer/treezor-transfer.model';
import { TransactionErrorModel } from '../transaction-error/transaction-error.model';
import {
    FireblocksTransactionModel,
    SimplifiedFireblocksTransactionModel
} from '../fireblocks-transaction/fireblocks-transaction.model';
import { ClientModel } from '../user/client.model';
import { TransactionHistoryModel } from '../transaction-history/transaction-history.model';

export interface TransactionModel extends Omit<StrapiTransactionFormModel, 'created_by_user' | 'user'>, BaseModel {
    treezorTransfers?: TreezorTransferModel[],
    fireblocksTransactions?: FireblocksTransactionModel[],
    transactionErrors?: TransactionErrorModel[],
    transactionHistories?: TransactionHistoryModel[],
    user: ClientModel
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
    date_of_completion: string | undefined,
    investedAmount: number | undefined,
    clientEurEarnings: number | undefined,
    days_of_investment: number | undefined,
    mlcFinalEarnings:  number | undefined,
    movements: {
        treezorCommonWallet: Partial<TreezorTransferModel>[] | undefined,
        fireblocksCommonWallet: Partial<FireblocksTransactionModel>[] | undefined,
        fireblocksPrivateWallet: Partial<FireblocksTransactionModel>[] | undefined
    }
}
