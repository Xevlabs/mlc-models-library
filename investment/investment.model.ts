export interface StrapiInvestmentModel {
    clientEurEarnings: number;
    currentEurInvestedAmount: number;
    daysSinceLastTransaction: number;
    totalEarningCoefficient: number;
}

export interface InvestmentModel extends StrapiInvestmentModel {
    mlcEstimatedBenefits: number;
}