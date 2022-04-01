import { DbLinkModel, FileModel, TimestampModel } from '../..';
import { PopulatedBaseModel } from '../../base/base.model';
import { ClientKycModel } from './client-kyc.model';
import { KycDocumentStatusEnum } from '../../enums/kyc-document-status.enum';
import { CompanyKycDocumentTypeEnum } from '../../enums/treezor-kyc/treezor-kyc-document-type.enum';
import { Files } from 'formidable';

export interface KycDocumentModel extends PopulatedBaseModel, ClientKycDocumentModel {
    clientKyc: ClientKycModel,
}

export interface StrapiKycDocumentFormModel extends StrapiCommonKycDocumentModel {
    clientKyc: DbLinkModel,
}

export interface ClientKycDocumentModel extends TimestampModel, StrapiCommonKycDocumentModel {
    id: number,
    document: FileModel
}

interface StrapiCommonKycDocumentModel {
    status: KycDocumentStatusEnum,
    title: string,
    comment?: string,
    type: CompanyKycDocumentTypeEnum
}

export interface KycDocumentUploadDataForm extends Omit<StrapiExtendedKycDocumentUploadDataForm, 'status'> {}

export interface StrapiExtendedKycDocumentUploadDataForm extends StrapiCommonKycDocumentModel {
    document: Files
}
