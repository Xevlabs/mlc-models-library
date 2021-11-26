import { DbLinkModel, TimestampModel } from '../common/common.model';
import { RoleModel } from '../roles/roles.model';
import { CountryModel } from '../country/country.model';
import { TitleEnum } from './title.enum';
import { ProvidersEnum } from './providers.enum';

export interface ProfileModel extends TimestampModel, Omit<ExtendedBaseProfileForm, 'role' | 'placeOfBirth'> {
    id: string;
    email: string;
    provider: ProvidersEnum;
    role: RoleModel;
    placeOfBirth: CountryModel;
}

export interface BaseProfileForm {
    firstName: string;
    lastName: string;
    title: TitleEnum;
    email: string;
    role: DbLinkModel;
    password: string;
    phone: string;
    placeOfBirth: DbLinkModel;
}


export interface ExtendedBaseProfileForm extends BaseProfileForm, BlockedForm {
    username: string;
    confirmed: boolean;
}

export interface BlockedForm {
    blocked: boolean;
    comment?: string;
}
