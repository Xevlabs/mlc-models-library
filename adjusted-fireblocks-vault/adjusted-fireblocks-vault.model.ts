import { SimplifiedTransactionWithFireblocksModel } from '../transaction/transaction.model';
import { AdjustedExtendedFireblocksVaultAccount, ExtendedFireblocksVaultAccount } from '../common-fireblocks-vault/extended-fireblocks-vault-account';

export interface AdjustedFireblocksVaultModel {
    adjustedVault: AdjustedExtendedFireblocksVaultAccount,
    isDifferentFromFireblocks: boolean,
    hasErrors: boolean,
    movements: SimplifiedTransactionWithFireblocksModel[];
    vault: ExtendedFireblocksVaultAccount
}
