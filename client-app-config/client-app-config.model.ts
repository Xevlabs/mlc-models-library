import { TimestampModel } from '../common/common.model';
import { BaseLocalizedModel } from '@/typings/localization/localization.model';

export interface ClientAppConfigModel extends BaseLocalizedModel, TimestampModel, ClientAppConfigFormModel {
    id: number
}

export interface ClientAppConfigFormModel {
    onboardingVideoLink: string
}
