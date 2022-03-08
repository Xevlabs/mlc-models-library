import { DbLinkModel } from '../common/common.model';
import { TransactionTypeEnum } from '../enums/transaction-type.enum';
import { BaseModel, PopulatedBaseModel } from '../base/base.model';
import { TransactionStatusEnum } from '../enums/transaction-status.enum';
import { TreezorTransferModel } from '../treezor-transfer/treezor-transfer.model';
import { TransactionErrorModel } from '../transaction-error/transaction-error.model';
import { ClientModel } from '../user/client.model';
import { TransactionHistoryModel } from '../transaction-history/transaction-history.model';

export interface TransactionModel extends BaseTransactionModel, PopulatedBaseModel {
    user: ClientModel
}

export interface NonPopulatedTransactionModel extends BaseTransactionModel, BaseModel {
    user: number
}

interface BaseTransactionModel extends Omit<StrapiTransactionFormModel, 'created_by_user' | 'updated_by_user' | 'user'> {
    treezorTransfer?: TreezorTransferModel,
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
}

export interface TransactionDetailsModel extends Omit<TransactionModel, 'updated_by_user' | 'created_at' | 'updated_at' | 'treezorTransfer'> {
    dateOfDemand: string,
    dateOfCompletion?: string,
    investedAmount?: number,
    clientEurEarnings?: number,
    daysOfInvestment?: number,
    movements: {
        treezorCommonWallet?: Partial<TreezorTransferModel>
    }
}
