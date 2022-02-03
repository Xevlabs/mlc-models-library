import { FireblocksApiTransactionStatusEnum } from '../enums/fireblocks-api/fireblocks-api-transaction-status.enum';
import { FireblocksApiAddressTypeEnum } from '../enums/fireblocks-api/fireblocks-api-address-type.enum';
import { FireblocksApiOperationEnum } from '../enums/fireblocks-api/fireblocks-api-operation.enum';
import { FireblocksCommonCustomerRef } from '../enums/common-wallets/fireblocks-common-customerRef';
import { BaseModel } from '../base/base.model';
import { MlcEarningTypeEnum } from '../enums/mlc-earning-type.enum';
import { PeerType } from 'fireblocks-sdk';
import { NonPopulatedTransactionModel } from '../transaction/transaction.model';

export interface FireblocksTransactionModel extends BaseModel, Omit<StrapiFireblocksTransactionFormModel, 'transaction'> {
    fireblocksTransactionLogs: number[]
    transaction: NonPopulatedTransactionModel,
    type: FireblocksCommonCustomerRef,
    destinationType: PeerType
}

export interface StrapiFireblocksTransactionFormModel {
    assetId: string,
    sourceType?: PeerType,
    sourceId?: string,
    sourceName?: string,
    sourceSubType?: string,
    destinationType?: PeerType,
    destinationId?: string,
    destinationName?: string,
    destinationSubType?: string,
    requestedAmount?: number,
    amount: number,
    netAmount?: number,
    amountUSD?: number,
    serviceFee?: number,
    networkFee?: number,
    fireblocksCreatedAt?: number,
    fireblocksLastUpdated?: number,
    status: FireblocksApiTransactionStatusEnum,
    tag?: string,
    subStatus?: FireblocksApiTransactionStatusEnum,
    sourceAddress?: string,
    destinationAddress?: string,
    destinationAddressDescription?: string,
    destinationTag?: string,
    fireblocksCreatedBy?: string,
    fireblocksRejectedBy?: string,
    addressType?: FireblocksApiAddressTypeEnum,
    note?: string,
    feeCurrency?: string,
    operation?: FireblocksApiOperationEnum,
    amlScreeningResultProvider?: string,
    amlScreeningResultPayload?: string,
    customerRefId?: string,
    numOfConfirmations?: number,
    transaction?: number,
    type?: FireblocksCommonCustomerRef,
    mlcEarningType?: MlcEarningTypeEnum
}

export interface SimplifiedFireblocksTransactionModel {
    id: number,
    type: FireblocksCommonCustomerRef,
    status: FireblocksApiTransactionStatusEnum,
    assetId: string,
    amount: number,
    eurValue?: number
}
