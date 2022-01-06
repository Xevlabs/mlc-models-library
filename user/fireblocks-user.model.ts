import { TimestampModel } from '../common/common.model';

export interface FireblocksUserModel extends FireblocksUserFormModel, TimestampModel {
    id: string;
}

export interface FireblocksUserFormModel {
    vaultId: string,
    name: string,
    customerRefId?: string,
    autoFuel: boolean,
    hiddenOnUI: boolean;
    clientInfo: number
}
