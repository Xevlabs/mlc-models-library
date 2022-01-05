import { AssetResponse } from 'fireblocks-sdk/dist/types';

export interface ExtendedFireblocksWalletAsset extends AssetResponse {
    value: {
        currency: 'EUR',
        marketPrice: number,
        walletValue: number
    }
}
