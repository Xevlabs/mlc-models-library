import {TranslationFormModel} from "./translation-form.model";
import {LocalizationRelationModel} from "./localization-relation.model";

export interface TranslationModel extends Omit<TranslationFormModel, 'localizations'> {
    id: number,
    locale: string,
    created_by: number,
    updated_by: number,
    created_at: number,
    updated_at: number,
    localizations: LocalizationRelationModel[]
}
