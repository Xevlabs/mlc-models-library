import { FireblocksCommonCustomerRef } from '../enums/common-wallets/fireblocks-common-customerRef';

export interface CommonFireblocksVaultModel {
    name: string,
    customerRefId: FireblocksCommonCustomerRef,
    fireblocksId: string
}
