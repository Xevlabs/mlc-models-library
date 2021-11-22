import { BaseModel } from '../../base/base.model';
import { KycStatusEnum } from '../../enums/kyc-status.enum';
import { TreezorKycAbstractModel } from './treezor-kyc-abstract.model';

export interface ClientKycModel extends BaseModel, Omit<ClientKycFormModel, 'treezorKycAbstract'> {
    treezorKycAbstract: TreezorKycAbstractModel
}

export interface ClientKycFormModel {
    status: KycStatusEnum,
    user: string,
    treezorKycAbstract?: number
}
