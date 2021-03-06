import { LocalizedModel } from '../localization/localization.model';
import { CountryIsoEnum } from '../enums/country-iso.enum';

export interface NationalityModel  extends LocalizedModel {
    isoCode: CountryIsoEnum,
    name: string
}
