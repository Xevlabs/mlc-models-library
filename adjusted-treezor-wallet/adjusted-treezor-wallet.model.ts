import { SimplifiedTreezorApiWalletModel, TreezorApiWalletModel } from '../treezor-api/treezor-api.model';
import { SimplifiedTransactionModel } from '../transaction/transaction.model';

export interface AdjustedTreezorWalletModel {
    treezorWallet: TreezorApiWalletModel,
    adjustedValue: number,
    currency: 'EUR',
    valueDifferentFromTreezor: boolean,
    hasErrors: boolean,
    movements: SimplifiedTransactionModel[]
}

export interface ClientAdjustedTreezorWalletModel extends Omit<AdjustedTreezorWalletModel, 'treezorWallet'> {
    treezorWallet: SimplifiedTreezorApiWalletModel
}
