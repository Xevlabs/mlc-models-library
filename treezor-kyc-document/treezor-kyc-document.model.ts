import { BaseModel } from '../base/base.model';
import { TreezorKycDocumentStatusEnum } from '../enums/treezor-kyc/treezor-kyc-document-status.enum';

export interface TreezorKycDocumentModel extends StrapiExtendedTreezorKycDocumentModel, BaseModel {}

export interface StrapiExtendedTreezorKycDocumentModel extends StrapiTreezorKycDocumentModel {
    clientKyc?: number;
}

export interface StrapiTreezorKycDocumentModel {
    documentId: string,
    documentTag: string,
    clientId: string,
    userId: string,
    userFirstname: string,
    userLastname: string,
    name: string,
    documentStatus: string,
    documentTypeId: string,
    documentType: string,
    fileName: string,
    thumbFileName: string,
    createdDate: string | null,
    modifiedDate: string | null,
    codeStatus: TreezorKycDocumentStatusEnum,
    informationStatus: string,
    residenceId: string
}
