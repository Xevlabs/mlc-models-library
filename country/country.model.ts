import { LocalizedModel } from '@/typings/localization/localization.model';

export interface CountryModel extends LocalizedModel {
    isoCode: string,
    name: string
}
