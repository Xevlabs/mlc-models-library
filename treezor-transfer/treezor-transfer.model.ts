import { BaseModel } from '../base/base.model';
import { TreezorApiTransferModel } from '../treezor-api/treezor-api-transfer.model';
import { TreezorApiTransferStatusEnum } from '../enums/treezor-api-transfer-status.enum';

export interface TreezorTransferModel extends BaseModel, StrapiTreezorTransferFormModel {}

export interface StrapiTreezorTransferFormModel extends Partial<Omit<TreezorApiTransferModel, 'amount' | 'transferStatus'>> {
    amount?: number,
    transaction?: number,
    transferStatus: TreezorApiTransferStatusEnum
}
