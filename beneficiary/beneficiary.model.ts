import { TimestampModel, TreezorUserModel } from '..';

export interface BeneficiaryModel extends Omit<StrapiBeneficiaryFormModel, 'creditor'>, ClientBeneficiaryModel {
    creditor: TreezorUserModel
}

export interface StrapiBeneficiaryFormModel extends StrapiCommonBeneficiaryFields {
    creditor: number,
    treezorBeneficiaryId?: string
}

export interface ClientBeneficiaryModel extends StrapiCommonBeneficiaryFields {
    id: number
}

interface StrapiCommonBeneficiaryFields extends TimestampModel {
    ibanFullname: string,
    DbtrIBAN: string,
    usableForSct: boolean,
    ibanBic: string
}
