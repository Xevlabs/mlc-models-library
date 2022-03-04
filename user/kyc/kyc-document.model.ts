import { ClientModel, DbLinkModel, KycHistoryOperationTypeEnum, KycStatusEnum } from '../..';
import { PopulatedBaseModel } from '../../base/base.model';

export interface KycDocumentModel extends PopulatedBaseModel, Omit<StrapiKycDocumentFormModel, 'client' | 'created_by_user'>{
    id: number;
    client: ClientModel
}

export interface StrapiKycDocumentFormModel {
    client: DbLinkModel;
    status: KycStatusEnum;
    comment?: string;
    type: KycHistoryOperationTypeEnum;
}
