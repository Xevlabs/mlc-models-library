import { BaseModel } from '@/typings/base/base.model';

export interface UserKycModel extends BaseModel, UserKycFormModel {}

export interface UserKycFormModel {
    kycLink: string
}
