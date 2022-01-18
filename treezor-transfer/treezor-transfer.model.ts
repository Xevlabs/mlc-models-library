import { BaseModel } from '../base/base.model';
import { TreezorApiTransferModel } from '../treezor-api/treezor-api-transfer.model';
import { TreezorApiTransferStatusEnum } from '../enums/treezor-api-transfer-status.enum';
import { TransactionModel } from '../transaction/transaction.model';

export interface TreezorTransferModel extends BaseModel, Omit<StrapiTreezorTransferFormModel, 'transaction'> {
    transaction: TransactionModel,
    treezorTransferLogs: number[]
}

export interface StrapiTreezorTransferFormModel extends Partial<Omit<TreezorApiTransferModel, 'amount' | 'transferStatus'>> {
    amount?: number,
    transaction?: number,
    transferStatus: TreezorApiTransferStatusEnum
}
