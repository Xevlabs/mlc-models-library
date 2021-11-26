import { DbLinkModel } from '../../common/common.model';
import { ClientModel } from '../client.model';
import { ClientAccountStatusEnum } from '../../enums/client-account-status.enum';
import { KycStatusEnum } from '../../enums/kyc-status.enum';

export interface KycLogModel extends Omit<StrapiKycLogFormModel, 'client' | 'created_by_user'> {
    id: number,
    client: ClientModel,
    created_by_user: number
}

export interface StrapiKycLogFormModel {
    client: DbLinkModel,
    accountStatus: ClientAccountStatusEnum,
    comment?: string,
    kycStatus: KycStatusEnum,
    created_by_user?: DbLinkModel
}
