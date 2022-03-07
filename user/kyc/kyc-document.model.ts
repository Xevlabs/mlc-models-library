import { DbLinkModel, KycHistoryOperationTypeEnum, KycStatusEnum } from '../..';
import { PopulatedBaseModel } from '../../base/base.model';
import { ClientKycModel } from './client-kyc.model';

export interface KycDocumentModel extends PopulatedBaseModel, Omit<StrapiKycDocumentFormModel, 'clientKyc' | 'created_by_user'>{
    id: number;
    clientKyc: ClientKycModel
}

export interface StrapiKycDocumentFormModel {
    clientKyc: DbLinkModel;
    status: KycStatusEnum;
    comment?: string;
    type: KycHistoryOperationTypeEnum;
}