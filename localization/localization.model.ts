import { BaseModel } from '../base/base.model';

export interface LocalizedModel extends BaseModel, BaseLocalizedModel {}

export interface BaseLocalizedModel {
    locale: string,
    localizations: LocalizationModel[] | number[]
}

export interface LocalizationModel {
    id: number,
    locale: string
}
