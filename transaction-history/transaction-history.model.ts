import { DbLinkModel } from '../common/common.model';
import { TransactionStatusEnum } from '../enums/transaction-status.enum';
import { TransactionOperationTypeEnum } from '../enums/transaction-operation-type.enum';
import { BaseModel } from '../base/base.model';

export interface TransactionHistoryModel extends BaseModel, StrapiTransactionHistoryFormModel {}

export interface StrapiTransactionHistoryFormModel {
    transaction: DbLinkModel,
    status: TransactionStatusEnum,
    operationType: TransactionOperationTypeEnum,
    payload: string,
    newTransactionErrors?: DbLinkModel[]
}
