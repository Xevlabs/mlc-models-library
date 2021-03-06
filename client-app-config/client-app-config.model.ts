import { TimestampModel } from '../common/common.model';
import { BaseLocalizedModel } from '../localization/localization.model';

export interface ClientAppConfigModel extends BaseLocalizedModel, TimestampModel, ClientAppConfigFormModel {
    id: number
}

export interface ClientAppConfigFormModel {
    onboardingVideoLink: string,
    simulatedInvestments: SimulatedInvestmentModel[]
}

export interface SimulatedInvestmentModel {
    name: string,
    annualEarningRate: number
}
