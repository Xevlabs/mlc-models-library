import { TreezorUserModel } from '..';

export interface BeneficiaryModel extends Omit<StrapiBeneficiaryFormModel, 'creditor'> {
    creditor: TreezorUserModel
}

export interface StrapiBeneficiaryFormModel {
    ibanFullname: string,
    DbtrIBAN: string,
    ibanBic: string,
    creditor: number 
}