import { TimestampModel, TreezorUserModel } from '..';

export interface BeneficiaryModel extends Omit<StrapiBeneficiaryFormModel, 'creditor'>, TimestampModel {
    id: number,
    creditor: TreezorUserModel
}

export interface StrapiBeneficiaryFormModel {
    ibanFullname: string,
    DbtrIBAN: string,
    ibanBic: string,
    creditor: number,
    treezorBeneficiaryId?: string,
    usableForSct: boolean
}
