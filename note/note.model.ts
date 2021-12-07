import { ClientModel } from '../user/client.model';
import { PopulatedBaseModel } from '../base/base.model';
import { DbLinkModel } from '../common/common.model';

export interface NoteModel extends PopulatedBaseModel, NoteFormModel {
    user: ClientModel
}

export interface NoteFormModel {
    details: string
}

export interface StrapiExtendedNoteModel extends NoteFormModel {
    user: DbLinkModel
}
