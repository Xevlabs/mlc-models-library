import { TreezorCommonWalletTypeEnum } from '../enums/common-wallets/treezor-common-wallet-type.enum';
import { TreezorUserModel } from '../user/treezor-user.model';
import { TreezorApiWalletModel } from '../treezor-api/treezor-api.model';

export interface CommonTreezorWalletModel extends Omit<StrapiCommonTreezorWalletFormModel, 'treezorUser' | 'walletId' | 'tariffId' | 'userId' | 'jointUserId' | 'contractSigned' | 'codeStatus'> {
    id: number,
    walletId: number,
    codeStatus: number,
    userId: number,
    jointUserId: number,
    tariffId: number,
    contractSigned: number,
    treezorUser: TreezorUserModel
}

export interface StrapiCommonTreezorWalletFormModel extends TreezorApiWalletModel {
    walletType: TreezorCommonWalletTypeEnum,
    treezorUser: number
}
