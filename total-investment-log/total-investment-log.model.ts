import { TotalInvestmentModel } from '../investment/investment.model';

export interface TotalInvestmentLogModel extends StrapiTotalInvestmentForm {
    id: number
}

export interface StrapiTotalInvestmentForm extends TotalInvestmentModel {
    date: number
}
