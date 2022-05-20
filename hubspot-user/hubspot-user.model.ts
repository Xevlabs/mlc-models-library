import { DbLinkModel } from '../common/common.model';
import { ClientInfoModel } from '../user/client-info.model';
import { BaseModel } from '../base/base.model';
import { GenderEnum } from '../enums/gender.enum';
import { TitleEnum } from '../user/title.enum';

export interface HubspotUserModel extends BaseModel, Omit<StrapiHubspotUserForm, 'clientInfo'> {
    clientInfo: ClientInfoModel
}

export interface StrapiHubspotUserForm extends Omit<HubspotUserCreationForm, 'title'> {
    gender: GenderEnum,
    contactId?: string,
    dealId?: string,
    clientInfo?: DbLinkModel
}

export interface HubspotUserCreationForm {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    title: TitleEnum
}
