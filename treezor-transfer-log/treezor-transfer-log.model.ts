import { BaseModel } from '../base/base.model';
import { TreezorApiTransferStatusEnum } from '../enums/treezor-api-transfer-status.enum';

export interface TreezorTransferLogModel extends BaseModel, StrapiTreezorTransferLogFormModel {}

export interface StrapiTreezorTransferLogFormModel {
    treezorTransfer: number,
    transferStatus: TreezorApiTransferStatusEnum,
    payload: string
}
