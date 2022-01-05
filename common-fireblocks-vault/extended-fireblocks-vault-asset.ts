import { AssetResponse } from 'fireblocks-sdk/dist/types';

export interface ExtendedFireblocksVaultAsset extends AssetResponse {
    value: {
        currency: 'EUR',
        marketPrice: number,
        walletValue: number
    }
}
