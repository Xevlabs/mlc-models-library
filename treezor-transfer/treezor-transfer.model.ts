import { BaseModel } from '../base/base.model';
import { TreezorApiTransferModel } from '../treezor-api/treezor-api-transfer.model';
import { TreezorApiTransferStatusEnum } from '../enums/treezor-api-transfer-status.enum';
import { NonPopulatedTransactionModel } from '../transaction/transaction.model';
import { ClientModel } from '../user/client.model';
import { DbLinkModel } from '../common/common.model';
import { TreezorTransferLogModel } from '../treezor-transfer-log/treezor-transfer-log.model';

export interface TreezorTransferModel extends BaseModel, Omit<StrapiTreezorTransferFormModel, 'transaction' | 'user'> {
    transaction: NonPopulatedTransactionModel,
    treezorTransferLogs: TreezorTransferLogModel[],
    user: ClientModel
}

export interface StrapiTreezorTransferFormModel extends Partial<Omit<TreezorApiTransferModel, 'amount' | 'transferStatus'>> {
    amount?: number,
    transaction?: number,
    transferStatus: TreezorApiTransferStatusEnum,
    user?: DbLinkModel
}
