import { DbLinkModel } from '../../common/common.model';
import { ClientModel } from '../client.model';
import { ClientAccountStatusEnum } from '../../enums/client-account-status.enum';
import { KycStatusEnum } from '../../enums/kyc-status.enum';
import { KycHistoryOperationTypeEnum } from '@/typings/enums/kyc-history-operation-type.enum';

export interface KycLogModel extends Omit<StrapiKycLogFormModel, 'client' | 'created_by_user'> {
    id: number,
    client: ClientModel,
    created_by_user: ClientModel
}

export interface StrapiKycLogFormModel {
    client: DbLinkModel,
    accountStatus: ClientAccountStatusEnum,
    comment?: string,
    kycStatus: KycStatusEnum,
    type: KycHistoryOperationTypeEnum,
    created_by_user?: DbLinkModel
}
