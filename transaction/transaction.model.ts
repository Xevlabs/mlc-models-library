import { DbLinkModel } from '../common/common.model';
import { TransactionTypeEnum } from '../enums/transaction-type.enum';
import { BaseModel } from '../base/base.model';
import { TransactionStatusEnum } from '../enums/transaction-status.enum';
import { TreezorTransferModel } from '@/typings';

export interface TransactionModel extends Omit<StrapiTransactionFormModel, 'created_by_user'>, BaseModel {
    treezorTransfers?: TreezorTransferModel[]
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
