import { BaseModel } from '../../base/base.model';
import { KycStatusEnum } from '../../enums/kyc-status.enum';
import { TreezorKycAbstractModel } from './treezor-kyc-abstract.model';
import { KycRiskLevelEnum } from '../../enums/kyc-risk-level.enum';
import { DbLinkModel } from '../../common/common.model';
import { TreezorKycDocumentModel } from '../../treezor-kyc-document/treezor-kyc-document.model';
import { WorldCheckInfoModel } from '../../world-check-info/world-check-info.model';

export interface ClientKycModel extends BaseModel, Omit<StrapiClientKycCreationModel, 'treezorKycAbstract'>, Partial<ClientKycScoreRelatedFields> {
    treezorKycAbstract: TreezorKycAbstractModel,
    treezorDocuments: TreezorKycDocumentModel[],
    worldCheckInfo?: WorldCheckInfoModel
}

export interface StrapiClientKycCreationModel {
    status: KycStatusEnum,
    user: string,
    treezorKycAbstract?: number
}

export interface StrapiClientKycEditionModel extends ClientKycScoreRelatedFields {
    status?: KycStatusEnum,
    updated_by_user?: DbLinkModel
}

export interface KycBaseScoreFormModel {
    baseScore: number
}

interface ClientKycScoreRelatedFields {
    baseScore: number,
    currentScore: number,
    riskProfile: KycRiskLevelEnum
}
