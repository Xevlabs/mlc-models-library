import { BaseModel } from '../base/base.model';

export interface SettingsModel extends BaseModel {
    earningCoefficient: number;
    treezorBusinessId: string;
}
