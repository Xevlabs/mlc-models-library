import { BaseModel } from '../base/base.model';

export interface SettingsModel extends BaseModel, ClientSettingsModel {
    earningCoefficient: number;
    treezorBusinessId: string;
    kycScoreThresholdLow: number;
    kycScoreThresholdModerate: number;
    kycScoreThresholdHigh: number;
    payinMax: number;
    payoutMax: number;
}

export interface ExtendedSettingsModel extends SettingsModel {
    yearlyGlobalInterestRate: number;
}

export interface ClientSettingsModel {
    depositMin: number;
    withdrawalMin: number;
}
