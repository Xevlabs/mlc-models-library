import { AssetResponse } from 'fireblocks-sdk/dist/types';

export interface ExtendedFireblocksVaultAsset extends AssetResponse {
    value: FireblocksVaultAssetValue
}

export interface AdjustedFireblocksVaultAsset extends Pick<ExtendedFireblocksVaultAsset, 'id'> {
    totalBeforeTransactions: number,
    totalAfterTransactions: number,
    value: AdjustedFireblocksVaultAssetValue
}

interface FireblocksVaultAssetValue {
    currency: 'EUR',
    marketPrice: number,
    walletValue: number | null
}

interface AdjustedFireblocksVaultAssetValue extends Omit<FireblocksVaultAssetValue, 'walletValue'> {
    walletValueBeforeTransactions: number | null,
    walletValueAfterTransactions: number | null
}
