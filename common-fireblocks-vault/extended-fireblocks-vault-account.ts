import { VaultAccountResponse } from 'fireblocks-sdk';
import { AdjustedFireblocksVaultAsset, ExtendedFireblocksVaultAsset } from './extended-fireblocks-vault-asset';

export interface ExtendedFireblocksVaultAccount extends Omit<VaultAccountResponse, 'assets'> {
    assets: ExtendedFireblocksVaultAsset[]
}

export interface AdjustedExtendedFireblocksVaultAccount extends Omit<VaultAccountResponse, 'assets'> {
    assets: AdjustedFireblocksVaultAsset[]
}
