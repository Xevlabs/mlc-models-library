import { VaultAccountResponse } from 'fireblocks-sdk';
import { ExtendedFireblocksWalletAsset } from '../common-fireblocks-wallet/extended-fireblocks-wallet-asset';

export interface ExtendedFireblocksVaultAccount extends Omit<VaultAccountResponse, 'assets'> {
    assets: ExtendedFireblocksWalletAsset[]
}
