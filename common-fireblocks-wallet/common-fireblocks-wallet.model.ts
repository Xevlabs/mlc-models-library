import { FireblocksCommonCustomerRef } from '../enums/common-wallets/fireblocks-common-customerRef';

export interface CommonFireblocksWalletModel {
    name: string,
    customerRefId: FireblocksCommonCustomerRef,
    fireblocksId: string
}
