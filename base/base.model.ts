import { TimestampModel } from '@/typings';

export interface BaseModel extends TimestampModel {
    id: number,
    updated_by_user: number,
    created_by_user: number
}
