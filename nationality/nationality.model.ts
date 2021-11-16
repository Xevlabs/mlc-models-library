import { LocalizedModel } from '../localization/localization.model';

export interface NationalityModel  extends LocalizedModel {
    isoCode: string,
    name: string
}
