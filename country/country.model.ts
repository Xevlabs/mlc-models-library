import { LocalizedModel } from '../localization/localization.model';

export interface CountryModel extends LocalizedModel {
    isoCode: string,
    name: string
}
