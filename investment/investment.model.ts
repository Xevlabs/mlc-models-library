import { ClientAdjustedTreezorWalletModel } from '../adjusted-treezor-wallet/adjusted-treezor-wallet.model';

export interface InvestmentModel {
    clientEurEarnings: number;
    currentEurInvestedAmount: number;
    daysSinceLastTransaction: number;
    totalEarningCoefficient: number;
}

export interface ClientInvestmentModel extends InvestmentModel {
    treezorAdjustedWallet: ClientAdjustedTreezorWalletModel
}
