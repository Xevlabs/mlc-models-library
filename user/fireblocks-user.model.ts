import { TimestampModel } from '../common/common.model';

export interface FireblocksUserModel extends TimestampModel {
    fireblocksId: string,
    walletId: string,
    vaultId: string
}
