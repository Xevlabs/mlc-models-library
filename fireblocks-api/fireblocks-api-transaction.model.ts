import { FireblocksApiTransactionStatusEnum } from '../enums/fireblocks-api/fireblocks-api-transaction-status.enum';
import { FireblocksApiNetworkRecordStatusEnum } from '../enums/fireblocks-api/fireblocks-api-network-record-status.enum';
import { FireblocksApiOperationEnum } from '../enums/fireblocks-api/fireblocks-api-operation.enum';
import { FireblocksApiSigningAlgorithmEnum } from '../enums/fireblocks-api/fireblocks-api-signing-algorithm.enum';
import { FireblocksApiAuthorizationInfoLogicEnum } from '../enums/fireblocks-api/fireblocks-api-authorization-info-logic.enum';
import { FireblocksApiAddressTypeEnum } from '../enums/fireblocks-api/fireblocks-api-address-type.enum';
import { PeerType } from 'fireblocks-sdk';

export interface FireblocksApiTransactionModel {
    id: string,
    assetId: string,
    source: TransferPeerPathResponse,
    destination: TransferPeerPathResponse,
    amountInfo: {
        amount: string,
        requestedAmount: string,
        netAmount: string,
        amountUSD: string
    },
    feeInfo: {
        networkFee: string,
        serviceFee: string
    },
    requestedAmount: number,
    amount: number,
    netAmount: number,
    amountUSD: number,
    serviceFee: number,
    networkFee: number,
    createdAt: number,
    lastUpdated: number,
    status: FireblocksApiTransactionStatusEnum,
    txHash: string,
    index: number,
    tag: string,
    subStatus: FireblocksApiTransactionStatusEnum,
    sourceAddress: string,
    destinationAddress: string,
    destinationAddressDescription: string,
    destinationTag: string,
    signedBy: [
        string
    ],
    createdBy: string,
    rejectedBy: string,
    addressType: FireblocksApiAddressTypeEnum,
    note: string,
    exchangeTxId: string,
    feeCurrency: string,
    operation: FireblocksApiOperationEnum,
    networkRecords: [
        {
            source: TransferPeerPathResponse,
            destination: TransferPeerPathResponse,
            txHash: string,
            networkFee: string,
            assetId: string,
            netAmount: string,
            status: FireblocksApiNetworkRecordStatusEnum,
            type: string,
            destinationAddress: string,
            sourceAddress: string
        }
    ],
    amlScreeningResult: {
        provider: string,
        payload: any
    },
    customerRefId: string,
    numOfConfirmations: number,
    signedMessages: [
        {
            content: string,
            algorithm: FireblocksApiSigningAlgorithmEnum,
            derivationPath: number[],
            signature: {
                r: string,
                s: string,
                v: number
            },
            publicKey: string
        }
    ],
    replacedTxHash: string,
    externalTxId: string,
    blockInfo: {
        blockHeight: string,
        blockHash: string
    },
    authorizationInfo: {
        allowOperatorAsAuthorizer: boolean,
        logic: FireblocksApiAuthorizationInfoLogicEnum,
        groups: [
            {
                th: number,
                users: any
            }
        ]
    },
    extraParameters: any
}

interface TransferPeerPathResponse {
    type: PeerType,
    id: string,
    name: string,
    subType: string
}
