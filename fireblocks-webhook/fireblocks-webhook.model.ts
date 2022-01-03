import { FireblocksWebhookTypeEnum } from '../enums/fireblocks-webhook-type.enum';
import { BaseModel } from '../base/base.model';

export interface FireblocksWebhookModel extends BaseModel, FireblocksWebhookFormModel {}

export interface FireblocksReceivedWebhookModel<T> {
    type?: FireblocksWebhookTypeEnum,
    tenantId?: string,
    timestamp?: number,
    data?: T
}

export interface FireblocksWebhookFormModel {
    type?: FireblocksWebhookTypeEnum | null,
    tenantId?: string | null,
    timestamp?: number | null,
    data?: string | null,
    bodySignature?: string | null,
    signatureValidated: boolean
}
