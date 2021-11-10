import { TimestampModel } from '../common/common.model';

export interface FireblocksUserModel extends FireblocksUserFormModel, TimestampModel {
    id: string;
}

export interface FireblocksUserFormModel {
    fireblocksId: string,
    walletId: string,
    vaultId: string
}
