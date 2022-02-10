import { PopulatedBaseModel } from '../base/base.model';

export interface WorldCheckSettingsModel extends PopulatedBaseModel {
    groupId: string,
    genderSecondaryFieldTypeId: string,
    birthDateSecondaryFieldTypeId: string,
    addressCountrySecondaryFieldTypeId: string,
    birthCountrySecondaryFieldTypeId: string,
    nationalitySecondaryFieldTypeId: string
}
