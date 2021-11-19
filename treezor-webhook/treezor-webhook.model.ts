import { TreezorWebhookTypeEnum } from '../enums/treezor-webhook/treezor-webhook-type.enum';
import { TreezorWebhookPayloadTypeEnum } from '../enums/treezor-webhook/treezor-webhook-payload-type.enum';
import { BaseModel } from '../base/base.model';

export interface TreezorWebhookModel extends BaseModel, TreezorWebhookFormModel {}

export interface TreezorReceivedWebhookModel<T> {
    webhook?: string | TreezorWebhookTypeEnum,
    webhook_id?: string,
    webhook_created_at?: string,
    object?: string | TreezorWebhookPayloadTypeEnum,
    object_id?: string,
    object_payload?: T,
    object_payload_signature?: string
}

export interface TreezorWebhookFormModel {
    name?: string | TreezorWebhookTypeEnum | null,
    treezorId?: string | null,
    treezorCreatedAt?: string | null,
    objectType?: string | TreezorWebhookPayloadTypeEnum | null,
    objectId?: string | null,
    objectPayloadSignature?: string | null,
    objectPayload?: string | null,
    signatureValidated: boolean
}
