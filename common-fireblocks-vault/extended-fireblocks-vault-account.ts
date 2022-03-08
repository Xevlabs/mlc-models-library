import { VaultAccountResponse } from 'fireblocks-sdk';
import { ExtendedFireblocksVaultAsset } from './extended-fireblocks-vault-asset';

export interface ExtendedFireblocksVaultAccount extends Omit<VaultAccountResponse, 'assets'> {
    assets: ExtendedFireblocksVaultAsset[]
}
