import { AdjustedExtendedFireblocksVaultAccount, ExtendedFireblocksVaultAccount } from '../common-fireblocks-vault/extended-fireblocks-vault-account';

export interface AdjustedFireblocksVaultModel {
    adjustedVault: AdjustedExtendedFireblocksVaultAccount,
    isDifferentFromFireblocks: boolean,
    hasErrors: boolean,
    linkedTransactionsIds: number[];
    vault: ExtendedFireblocksVaultAccount
}
