import { BaseModel } from '../base/base.model';
import { WorldCheckInfoStatusEnum } from '../enums/world-check-info-status.enum';

export interface WorldCheckInfoModel extends BaseModel, StrapiWorldCheckInfoFormModel {}

export interface StrapiWorldCheckInfoFormModel {
    clientKyc: number,
    caseId: string,
    status: WorldCheckInfoStatusEnum,
    decisionComment?: string
}

export interface WorldCheckDecisionForm {
    accepted: boolean,
    comment?: string
}
