export interface TreezorBeneficiaryModel extends TreezorBeneficiaryFormModel {
    id: string;
}

export interface TreezorBeneficiaryFormModel {
    userId: number,
    name: string,
    iban: string,
    bic: string,
    usableForSct: boolean
}