import { BaseModel } from '../base/base.model';
import { TreezorApiTransferModel } from '../treezor-api/treezor-api-transfer.model';

export interface TreezorTransferModel extends BaseModel, StrapiTreezorTransferFormModel {}

export interface StrapiTreezorTransferFormModel extends Omit<TreezorApiTransferModel, 'amount'> {
    amount: number,
    transaction: number
}
