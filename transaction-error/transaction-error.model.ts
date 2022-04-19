import { BaseModel } from '../base/base.model';
import { TransactionErrorCodeEnum } from '../enums/transaction-error-code.enum';
import { TransactionErrorLevelEnum } from '../enums/transaction-error-level.enum';
import { ClientModel } from '../user/client.model';
import { DbLinkModel } from '../common/common.model';

export interface TransactionErrorModel extends BaseModel, Omit<StrapiTransactionErrorFormModel, 'resolvedBy'> {
    resolvedBy: ClientModel
}

export interface ClientTransactionErrorModel {
    code: TransactionErrorCodeEnum
}

export interface StrapiTransactionErrorFormModel {
    transaction: number,
    code: TransactionErrorCodeEnum,
    level: TransactionErrorLevelEnum,
    label: string,
    resolved: boolean,
    resolutionDate?: string,
    resolvedBy?: DbLinkModel,
    resolutionComment?: string,
    autoResolved: boolean
}
