import { TimestampModel } from '../common/common.model';

export interface TreezorUserModel extends TreezorUserFormModel, TimestampModel {
    id: string;
}

export interface TreezorUserFormModel {
    treezorId: string,
    walletId: string,
    iban: string
}
