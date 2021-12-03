import { ClientModel } from '../user/client.model';
import { BaseModel } from '../base/base.model';
import { DbLinkModel } from '../common/common.model';

export interface NoteModel extends BaseModel, NoteFormModel {
    user: ClientModel
}

export interface NoteFormModel {
    details: string
}

export interface StrapiExtendedNoteModel {
    user: DbLinkModel
}
