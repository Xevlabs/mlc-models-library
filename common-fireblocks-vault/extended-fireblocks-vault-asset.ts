import { AssetResponse } from 'fireblocks-sdk/dist/types';

export interface ExtendedFireblocksVaultAsset extends AssetResponse {
    value: {
        currency: 'EUR',
        marketPrice: number,
        walletValue: number | null
    }
}

export interface AdjustedFireblocksVaultAsset extends Pick<ExtendedFireblocksVaultAsset, 'value' | 'id' | 'total'> {

}
