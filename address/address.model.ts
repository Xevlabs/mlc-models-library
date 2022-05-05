import { BaseModel } from '../base/base.model';
import { CountryModel } from '../country/country.model';
import { DbLinkModel } from '../common/common.model';

export interface AddressModel extends BaseModel, Omit<AddressFormModel, 'country'> {
    country: CountryModel
}

export interface AddressFormModel {
    address1: string,
    address2?: string,
    address3?: string,
    postCode: string,
    country: DbLinkModel,
    city: string,
    state?: string
}
