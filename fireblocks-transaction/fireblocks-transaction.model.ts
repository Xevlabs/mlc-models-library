import { FireblocksApiTransferPeerPathTypeEnum } from '../enums/fireblocks-api/fireblocks-api-transfer-peer-path-type.enum';
import { FireblocksApiTransactionStatusEnum } from '../enums/fireblocks-api/fireblocks-api-transaction-status.enum';
import { FireblocksApiAddressTypeEnum } from '../enums/fireblocks-api/fireblocks-api-address-type.enum';
import { FireblocksApiOperationEnum } from '../enums/fireblocks-api/fireblocks-api-operation.enum';
import { FireblocksCommonCustomerRef } from '../enums/common-wallets/fireblocks-common-customerRef';
import { BaseModel } from '../base/base.model';

export interface FireblocksTransactionModel extends BaseModel, StrapiFireblocksTransactionFormModel {}

export interface StrapiFireblocksTransactionFormModel {
    assetId: string,
    sourceType: FireblocksApiTransferPeerPathTypeEnum,
    sourceId: string,
    sourceName: string,
    sourceSubType: string,
    destinationType: FireblocksApiTransferPeerPathTypeEnum,
    destinationId: string,
    destinationName: string,
    destinationSubType: string,
    requestedAmount: number,
    amount: number,
    netAmount: number,
    amountUSD: number,
    serviceFee: number,
    networkFee: number,
    fireblocksCreatedAt: number,
    fireblocksLastUpdated: number,
    status: FireblocksApiTransactionStatusEnum,
    tag: string,
    subStatus: FireblocksApiTransactionStatusEnum,
    sourceAddress: string,
    destinationAddress: string,
    destinationAddressDescription: string,
    destinationTag: string,
    fireblocksCreatedBy: string,
    fireblocksRejectedBy: string,
    addressType: FireblocksApiAddressTypeEnum,
    note: string,
    feeCurrency: string,
    operation: FireblocksApiOperationEnum,
    amlScreeningResultProvider: string,
    amlScreeningResultPayload: string,
    customerRefId: string,
    numOfConfirmations: number,
    transaction: number,
    fireblocksTransactionLogs: number[],
    type: FireblocksCommonCustomerRef
}
