import { BaseModel } from '../base/base.model';
import { TreezorKycLevelEnum } from '../enums/treezor-kyc/treezor-kyc-level.enum';
import { TreezorKycReviewStatusEnum } from '../enums/treezor-kyc/treezor-kyc-review-status.enum';
import { TreezorKycLivenessScoreEnum } from '../enums/treezor-kyc/treezor-kyc-liveness-score.enum';

export interface UserKycModel extends BaseModel, UserKycFormModel {}

export interface UserKycFormModel {
    treezorKycLivenessLink: string,
    treezorKycLevel: TreezorKycLevelEnum,
    treezorKycReviewStatus: TreezorKycReviewStatusEnum,
    treezorKycLivenessScore: TreezorKycLivenessScoreEnum
}
