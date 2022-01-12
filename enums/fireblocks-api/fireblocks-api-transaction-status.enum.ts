export enum FireblocksApiTransactionStatusEnum {
    SUBMITTED = 'SUBMITTED',
    QUEUED = 'QUEUED',
    PENDING_AUTHORIZATION = 'PENDING_AUTHORIZATION',
    PENDING_SIGNATURE = 'PENDING_SIGNATURE',
    BROADCASTING = 'BROADCASTING',
    PENDING_3RD_PARTY_MANUAL_APPROVAL = 'PENDING_3RD_PARTY_MANUAL_APPROVAL',
    PENDING_3RD_PARTY = 'PENDING_3RD_PARTY',
    CONFIRMING = 'CONFIRMING',
    PARTIALLY_COMPLETED = 'PARTIALLY_COMPLETED',
    PENDING_AML_SCREENING = 'PENDING_AML_SCREENING',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
    REJECTED = 'REJECTED',
    BLOCKED = 'BLOCKED',
    FAILED  = 'FAILED'
}
