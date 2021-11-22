import { BaseModel } from '../../base/base.model';
import { TreezorKycLevelEnum } from '../../enums/treezor-kyc/treezor-kyc-level.enum';
import { TreezorKycReviewStatusEnum } from '../../enums/treezor-kyc/treezor-kyc-review-status.enum';
import { TreezorKycLivenessScoreEnum } from '../../enums/treezor-kyc/treezor-kyc-liveness-score.enum';

export interface TreezorKycAbstractModel extends BaseModel, TreezorKycAbstractFormModel {}

export interface TreezorKycAbstractFormModel {
    livenessLink: string,
    level: TreezorKycLevelEnum,
    reviewStatus: TreezorKycReviewStatusEnum,
    livenessScore: TreezorKycLivenessScoreEnum,
    comment?: string,
    clientKyc: number
}
