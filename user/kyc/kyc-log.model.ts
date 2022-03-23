import { DbLinkModel } from '../../common/common.model';
import { ClientModel } from '../client.model';
import { ClientAccountStatusEnum } from '../../enums/client-account-status.enum';
import { KycStatusEnum } from '../../enums/kyc-status.enum';
import { KycHistoryOperationTypeEnum } from '../../enums/kyc-history-operation-type.enum';
import { PopulatedBaseModel } from '../../base/base.model';
import { KycDocumentModel } from './kyc-document.model';
import { CompanyModel } from '@/typings';

export interface KycLogModel extends PopulatedBaseModel, Omit<StrapiKycLogFormModel, 'client' | 'company' | 'created_by_user'> {
    id: number,
    client?: ClientModel,
    company?: CompanyModel,
    kycDocument: KycDocumentModel
}

export interface StrapiKycLogFormModel {
    client?: DbLinkModel,
    company?: DbLinkModel,
    accountStatus: ClientAccountStatusEnum,
    comment?: string,
    kycStatus: KycStatusEnum,
    type: KycHistoryOperationTypeEnum,
    created_by_user?: DbLinkModel
}
