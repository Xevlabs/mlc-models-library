import { BeneficiaryModel } from '../beneficiary/beneficiary.model';
import { DbLinkModel, TimestampModel } from '../common/common.model';
import { ExtendedClientInfoModel } from './client-info.model';
import { ClientKycModel } from './kyc/client-kyc.model';
import { TreezorControllingPersonTypeEnum } from '../enums/treezor-controlling-person-type.enum';
import { CommonTreezorWalletModel } from '../common-treezor-wallet/common-treezor-wallet.model';
import { CountryModel } from '../country/country.model';

export interface ExtendedTreezorUserModel extends TreezorUserModel {
    clientInfo: ExtendedClientInfoModel;
    clientKyc: ClientKycModel;
}

export interface TreezorUserModel extends Omit<TreezorUserFormModel, 'clientInfo' | 'taxResidenceCountry'>, TimestampModel {
    id: string,
    commonTreezorWallet?: CommonTreezorWalletModel,
    taxResidenceCountry?: CountryModel,
    beneficiaries: BeneficiaryModel[]
}

export interface TreezorUserFormModel {
    treezorId: string,
    walletId: string,
    iban: string,
    treezorTaxResidenceId?: string,
    taxResidenceCountry?: DbLinkModel,
    taxPayerId?: string | null,
    clientInfo: number,
    parentUserId?: string | null,
    controllingPersonType?: TreezorControllingPersonTypeEnum | null,
    effectiveBeneficiary?: number | null
}
