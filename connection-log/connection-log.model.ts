import { BaseModel } from '@/typings/base/base.model';

export interface ConnectionLogModel extends BaseModel, ConnectionLogFormModel {}

export interface ConnectionLogFormModel {
    ip: string,
    userAgent: string,
    user: number
}
