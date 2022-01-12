import { DbLinkModel } from '../common/common.model';
import { TransactionTypeEnum } from '../enums/transaction-type.enum';
import { BaseModel } from '../base/base.model';
import { TransactionStatusEnum } from '../enums/transaction-status.enum';
import { TreezorTransferModel } from '../treezor-transfer/treezor-transfer.model';
import { TransactionErrorModel } from '../transaction-error/transaction-error.model';

export interface TransactionModel extends Omit<StrapiTransactionFormModel, 'created_by_user' | 'user'>, BaseModel {
    treezorTransfers?: TreezorTransferModel[],
    created_by_user: number,
    user: number
}

export interface StrapiTransactionFormModel extends TransactionFormModel{
    type: TransactionTypeEnum,
    status: TransactionStatusEnum,
    currency: 'EUR',
    user: DbLinkModel,
    created_by_user?: DbLinkModel
}

export interface TransactionFormModel {
    amount: number
}

export interface StrapiTransactionAndErrorsModel {
    transaction: TransactionModel,
    newErrors: TransactionErrorModel[]
}
