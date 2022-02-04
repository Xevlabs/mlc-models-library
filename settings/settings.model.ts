import { BaseModel } from '../base/base.model';

export interface SettingsModel extends BaseModel {
    earningCoefficient: number;
    treezorBusinessId: string;
    defaultClientAsset: string;
    kycScoreThresholdLow: number;
    kycScoreThresholdModerate: number;
    kycScoreThresholdHigh: number;
}

export interface ExtendedSettingsModel extends Omit<SettingsModel, 'id' | 'updated_by_user' | 'created_by_user' | 'created_at' | 'updated_at'> {
    yearlyGlobalInterestRate: number;
}