import { BaseModel } from '../base/base.model';

export interface SettingsModel extends BaseModel {
    earningCoefficient: number;
    treezorBusinessId: string;
    kycScoreThresholdLow: number;
    kycScoreThresholdModerate: number;
    kycScoreThresholdHigh: number;
    depositMin: number;
    withdrawalMin: number;
}

export interface ExtendedSettingsModel extends SettingsModel {
    yearlyGlobalInterestRate: number;
}
