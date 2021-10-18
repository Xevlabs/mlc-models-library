import { LocalizedModel } from '../localization/localization.model';

export interface TranslationFormModel {
    key: string,
    value: string,
}

export interface TranslationModel extends TranslationFormModel, LocalizedModel {}
