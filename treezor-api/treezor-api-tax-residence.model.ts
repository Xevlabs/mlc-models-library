import { CountryIsoEnum } from '../enums/country-iso.enum';

export interface TreezorApiTaxResidenceModel extends Omit<TreezorApiTaxResidenceFormModel, 'taxPayerId'> {
    id: number,
    taxPayerId: string | null,
    createdDate: string,
    lastUpdate: string,
    deletedDate: string
}

export interface TreezorApiTaxResidenceFormModel extends TreezorApiTaxResidenceEditionFormModel {
    userId: number
}

export interface TreezorApiTaxResidenceEditionFormModel {
    country: CountryIsoEnum,
    taxPayerId?: string,
    liabilityWaiver: boolean
}
