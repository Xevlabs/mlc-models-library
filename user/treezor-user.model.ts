import { BeneficiaryModel } from '../beneficiary/beneficiary.model';
import { TimestampModel } from '../common/common.model';
import { ExtendedClientInfoModel } from './client-info.model';
import { ClientKycModel } from './kyc/client-kyc.model';
import { TreezorControllingPersonTypeEnum } from '../enums/treezor-controlling-person-type.enum';
import { CommonTreezorWalletModel } from '../common-treezor-wallet/common-treezor-wallet.model';

export interface ExtendedTreezorUserModel extends TreezorUserModel {
    clientInfo: ExtendedClientInfoModel;
    clientKyc: ClientKycModel;
    beneficiaries: BeneficiaryModel[];
}

export interface TreezorUserModel extends Omit<TreezorUserFormModel, 'clientInfo'>, TimestampModel {
    id: string,
    commonTreezorWallet?: CommonTreezorWalletModel
}

export interface TreezorUserFormModel {
    treezorId: string,
    walletId: string,
    iban: string,
    clientInfo: number,
    parentUserId?: string | null,
    controllingPersonType?: TreezorControllingPersonTypeEnum | null,
    effectiveBeneficiary?: number | null
}
