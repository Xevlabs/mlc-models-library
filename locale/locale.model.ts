import { TimestampModel } from '@/typings';

export interface LocaleModel extends TimestampModel {
    id: string,
    name:string,
    code: string
}
