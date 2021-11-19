import { TimestampModel } from '../common/common.model';
import { ExtendedClientInfoModel } from './client-info.model';

export interface ExtendedTreezorUserModel extends TreezorUserModel {
    clientInfo: ExtendedClientInfoModel;
}

export interface TreezorUserModel extends Omit<TreezorUserFormModel, 'clientInfo'>, TimestampModel {
    id: string;
}

export interface TreezorUserFormModel {
    treezorId: string,
    walletId: string,
    iban: string,
    clientInfo: number
}
