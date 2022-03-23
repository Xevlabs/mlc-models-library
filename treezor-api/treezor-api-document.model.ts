import { TreezorKycDocumentTypeEnum } from '../enums/treezor-kyc/treezor-kyc-document-type.enum';
import { TreezorKycDocumentStatusEnum } from '@/typings';

export interface TreezorApiDocumentModel {
    documentId: string,
    documentTag: string,
    clientId: string,
    userId: string,
    userFirstname: string,
    userLastname: string,
    name: string,
    documentStatus: string,
    documentTypeId: string,
    documentType: TreezorKycDocumentTypeEnum,
    fileName: string,
    thumbFileName: string,
    createdDate: string | null,
    modifiedDate: string | null,
    codeStatus: TreezorKycDocumentStatusEnum,
    informationStatus: string,
    residenceId: string
}

export interface TreezorApiDocumentFormModel {
    fileContentBase64: string,
    userId: string,
    documentTypeId: number,
    name: string | null
}
