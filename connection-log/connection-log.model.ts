import { BaseModel } from '@/typings/base/base.model';

export interface ConnectionLogModel extends BaseModel, ConnectionLogFormModel {}

export interface ConnectionLogFormModel {
    ip: string,
    user_agent: string,
    user: number
}
