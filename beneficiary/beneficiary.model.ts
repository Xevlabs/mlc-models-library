import { TimestampModel, TreezorUserModel } from '..';

export interface BeneficiaryModel extends Omit<StrapiBeneficiaryFormModel, 'creditor'>, TimestampModel, ClientBeneficiaryModel {
    creditor: TreezorUserModel
}

export interface StrapiBeneficiaryFormModel extends StrapiCommonBeneficiaryFields {
    ibanBic: string,
    creditor: number,
    treezorBeneficiaryId?: string,
    usableForSct: boolean
}

export interface ClientBeneficiaryModel extends StrapiCommonBeneficiaryFields {
    id: number
}

interface StrapiCommonBeneficiaryFields {
    ibanFullname: string,
    DbtrIBAN: string
}
