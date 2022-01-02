import { InternalWalletAsset } from 'fireblocks-sdk/dist/types';

export interface ExtendedFireblocksWalletAsset extends InternalWalletAsset {
    value: {
        currency: 'EUR',
        marketPrice: number,
        walletValue: number
    }
}
