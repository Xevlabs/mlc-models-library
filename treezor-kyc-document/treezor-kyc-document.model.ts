import { BaseModel } from '../base/base.model';
import {
    CompanyKycDocumentTypeEnum
} from '../enums/treezor-kyc/treezor-kyc-document-type.enum';
import { Files } from 'formidable';
import { TreezorApiDocumentModel } from '@/typings/treezor-api/treezor-api-document.model';

export interface TreezorKycDocumentModel extends StrapiTreezorKycDocumentFormModel, BaseModel {}

export interface StrapiTreezorKycDocumentFormModel extends Omit<TreezorKycDocumentUploadDataForm, 'document'>, Omit<TreezorApiDocumentModel, 'documentType'> {
    clientKyc?: number;
}

export interface TreezorKycDocumentUploadDataForm {
    documentType: CompanyKycDocumentTypeEnum,
    document: Files
}
