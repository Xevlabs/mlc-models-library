import { KycRiskLevelEnum } from '../enums/kyc-risk-level.enum';
import { MlcKycDocumentLevelEnum } from '../enums/mlc-kyc-document-level.enum';
import { TimestampModel } from '../common/common.model';

export interface MlcDocThresholdModel extends TimestampModel {
    id: number,
    riskProfile: KycRiskLevelEnum,
    scoreThreshold: number,
    requiredDocLevel: MlcKycDocumentLevelEnum
}
