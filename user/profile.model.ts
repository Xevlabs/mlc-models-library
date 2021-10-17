import { DbLinkModel, TimestampModel } from '@/typings';
import { RoleModel } from '@/typings/roles/roles.model';
import { CountryModel } from '@/typings/country/country.model';
import { TitleEnum } from '@/typings/user/title.enum';
import { ProvidersEnum } from '@/typings/user/providers.enum';

export interface ProfileModel extends TimestampModel, Omit<ExtendedBaseProfileForm, 'role' | 'placeOfBirth'> {
    id: string;
    email: string;
    provider: ProvidersEnum;
    confirmed: boolean;
    blocked: boolean;
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
    placeOfBirth: DbLinkModel
}


export interface ExtendedBaseProfileForm extends BaseProfileForm {
    username: string;
}
