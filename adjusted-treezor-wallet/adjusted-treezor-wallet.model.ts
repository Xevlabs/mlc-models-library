import { SimplifiedTreezorApiWalletModel, TreezorApiWalletModel } from '../treezor-api/treezor-api.model';

export interface AdjustedTreezorWalletModel {
    treezorWallet: TreezorApiWalletModel,
    adjustedValue: number,
    currency: 'EUR',
    valueDifferentFromTreezor: boolean,
    hasErrors: boolean
}

export interface ClientAdjustedTreezorWalletModel extends Omit<AdjustedTreezorWalletModel, 'treezorWallet'> {
    treezorWallet: SimplifiedTreezorApiWalletModel
}
