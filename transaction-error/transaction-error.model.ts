import { BaseModel } from '../base/base.model';
import { TransactionErrorCodeEnum } from '../enums/transaction-error-code.enum';
import { TransactionErrorLevelEnum } from '../enums/transaction-error-level.enum';

export interface TransactionErrorModel extends BaseModel, StrapiTransactionErrorFormModel {}

export interface StrapiTransactionErrorFormModel {
    transaction: number,
    code: TransactionErrorCodeEnum,
    level: TransactionErrorLevelEnum,
    label: string,
    resolved: boolean
}
