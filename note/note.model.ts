import { ClientModel } from '../user/client.model';
import { DbLinkModel } from '../common/common.model';
import { BaseModel } from '../base/base.model';

export interface NoteModel extends BaseModel, Omit<NoteFormModel, 'user'> {
    user: ClientModel
}

export interface NoteFormModel {
    details: string,
    user?: DbLinkModel
}
