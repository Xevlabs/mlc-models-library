import { TimestampModel, TreezorUserModel } from '..';

export interface BeneficiaryModel extends Omit<StrapiBeneficiaryFormModel, 'creditor'>, ClientBeneficiaryModel {
    creditor: TreezorUserModel
}

export interface StrapiBeneficiaryFormModel extends StrapiCommonBeneficiaryFields {
    creditor: number,
    treezorBeneficiaryId?: string
}

export interface ClientBeneficiaryModel extends StrapiCommonBeneficiaryFields, TimestampModel {
    id: number
}

export interface BeneficiaryFormModel {
    ibanFullname: string,
    DbtrIBAN: string,
    ibanBic: string
}

interface StrapiCommonBeneficiaryFields extends BeneficiaryFormModel, BeneficiaryBlockedForm {
    usableForSct: boolean,
    suspicious: boolean
}

export interface BeneficiaryBlockedForm {
    blocked: boolean
}
