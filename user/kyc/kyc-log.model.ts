import { DbLinkModel } from '../../common/common.model';
import { ClientModel } from '../client.model';
import { ClientAccountStatusEnum } from '../../enums/client-account-status.enum';
import { KycStatusEnum } from '../../enums/kyc-status.enum';
import { KycHistoryOperationTypeEnum } from '../../enums/kyc-history-operation-type.enum';
import { PopulatedBaseModel } from '../../base/base.model';
import { KycDocumentModel } from './kyc-document.model';

export interface KycLogModel extends PopulatedBaseModel, Omit<StrapiKycLogFormModel, 'client' | 'created_by_user' | 'kycDocument'> {
    id: number,
    client: ClientModel,
    kycDocument: KycDocumentModel
}

export interface StrapiKycLogFormModel {
    client: DbLinkModel,
    accountStatus: ClientAccountStatusEnum,
    comment?: string,
    kycStatus: KycStatusEnum,
    type: KycHistoryOperationTypeEnum,
    created_by_user?: DbLinkModel,
    kycDocument?: DbLinkModel
}
