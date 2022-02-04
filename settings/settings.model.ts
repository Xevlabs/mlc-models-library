import { BaseModel } from '../base/base.model';

export interface SettingsModel extends BaseModel {
    earningCoefficient: number;
    treezorBusinessId: string;
    defaultClientAsset: string;
    kycScoreThresholdLow: number;
    kycScoreThresholdModerate: number;
    kycScoreThresholdHigh: number;
}

export interface ExtendedSettingsModel extends SettingsModel {
    yearlyGlobalInterestRate: number;
}