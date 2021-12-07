import { DbLinkModel, TimestampModel } from '../common/common.model';
import { ClientModel } from '../user';

export interface BaseModel extends TimestampModel {
    id: number,
    updated_by_user: number,
    created_by_user: number
}

export interface StrapiBaseModel {
    updated_by_user: DbLinkModel,
    created_by_user: DbLinkModel
}

export interface PopulatedBaseModel {
    updated_by_user: ClientModel,
    created_by_user: ClientModel
}
