import { TreezorApiTransferStatusEnum } from '../enums/treezor-api-transfer-status.enum';

export interface TreezorApiTransferFormModel {
    walletId: number,
    beneficiaryWalletId: number,
    amount: string,
    currency: 'EUR',
    label: string
}

export interface TreezorApiTransferModel extends Omit<TreezorApiTransferFormModel, 'currency'> {
    transferId: number,
    transferStatus: TreezorApiTransferStatusEnum,
    transferTag: string,
    walletTypeId: number,
    beneficiaryWalletTypeId: number,
    transferDate: string | null,
    walletEventName: string,
    walletAlias: string,
    beneficiaryWalletEventName: string,
    beneficiaryWalletAlias: string,
    currency: string,
    transferTypeId: number,
    createdDate: string,
    modifiedDate: string | null,
    foreignId: number,
    partnerFee: number,
    codeStatus: string,
    informationStatus: string
}
