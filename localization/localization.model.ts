import { BaseModel } from '../base/base.model';

export interface LocalizedModel extends BaseModel {
    locale: string,
    localizations: LocalizationModel[] | number[]
}

export interface LocalizationModel {
    id: number,
    locale: string
}
