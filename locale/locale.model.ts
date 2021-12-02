import { TimestampModel } from '../common/common.model';

export interface LocaleModel extends TimestampModel {
    id: string,
    name:string,
    code: string
}
