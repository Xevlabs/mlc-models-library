import { BeneficiaryModel } from '../beneficiary/beneficiary.model';
import { TimestampModel } from '../common/common.model';
import { ExtendedClientInfoModel } from './client-info.model';
import { ClientKycModel } from './kyc/client-kyc.model';

export interface ExtendedTreezorUserModel extends TreezorUserModel {
    clientInfo: ExtendedClientInfoModel;
    clientKyc: ClientKycModel;
    beneficiaries: BeneficiaryModel[];
    
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
