import { DbLinkModel } from '../common/common.model';
import { BaseModel } from '../base/base.model';

export interface TransactionErrorModel extends BaseModel, StrapiTransactionErrorFormModel {}

export interface StrapiTransactionErrorFormModel {
    transaction: number,
    key: string,
    treezorTransfer?: DbLinkModel,
    fireblocksTransaction?: DbLinkModel
}
