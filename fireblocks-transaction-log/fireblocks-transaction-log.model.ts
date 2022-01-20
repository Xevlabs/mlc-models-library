import { FireblocksApiTransactionStatusEnum } from '../enums/fireblocks-api/fireblocks-api-transaction-status.enum';
import { BaseModel } from '../base/base.model';

export interface FireblocksTransactionLogModel extends BaseModel, StrapiFireblocksTransactionLogFormModel {}

export interface StrapiFireblocksTransactionLogFormModel {
    fireblocksTransaction: number,
    status: FireblocksApiTransactionStatusEnum,
    payload: string
}
