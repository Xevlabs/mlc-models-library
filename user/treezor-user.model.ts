import { TimestampModel } from '../common/common.model';

export interface TreezorUserModel extends TimestampModel {
    treezorId: string,
    walletId: string
}
