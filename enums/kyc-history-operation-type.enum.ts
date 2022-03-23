export enum KycHistoryOperationTypeEnum {
    CLIENT_CREATION = 'CLIENT_CREATION',
    COMPANY_CREATION = 'COMPANY_CREATION',
    SUSPICIOUS_TRANSFER_RECIVED = 'SUSPICIOUS_TRANSFER_RECIVED',
    VALIDATE_SUSPICIOUS_TRANSFERS = 'VALIDATE_SUSPICIOUS_TRANSFERS',
    TREEZOR_KYC_LIVENESS_CREATION = 'TREEZOR_KYC_LIVENESS_CREATION',
    TREEZOR_KYC_LIVENESS_FAILURE = 'TREEZOR_KYC_LIVENESS_FAILURE',
    TREEZOR_KYC_LIVENESS_UPDATE = 'TREEZOR_KYC_LIVENESS_UPDATE',
    TREEZOR_KYC_LIVENESS_DEMAND = 'TREEZOR_KYC_LIVENESS_DEMAND',
    TREEZOR_KYC_UPDATE = 'TREEZOR_KYC_UPDATE',
    TREEZOR_KYC_VALIDATION = 'TREEZOR_KYC_VALIDATION',
    WORLD_CHECK_RETRY_SCREENING = 'WORLD_CHECK_RETRY_SCREENING',
    WORLD_CHECK_ACCEPT_AFTER_REVIEW = 'WORLD_CHECK_ACCEPT_AFTER_REVIEW',
    WORLD_CHECK_REFUSE_AFTER_REVIEW = 'WORLD_CHECK_REFUSE_AFTER_REVIEW',
    FREEZE_ACCOUNT = 'FREEZE_ACCOUNT',
    UNFREEZE_ACCOUNT = 'UNFREEZE_ACCOUNT',
    BASE_SCORE_DEFINED = 'BASE_SCORE_DEFINED',
    CREATE_TREEZOR_KYC_DOCUMENT = 'CREATE_TREEZOR_KYC_DOCUMENT',
    UPDATE_TREEZOR_KYC_DOCUMENT = 'UPDATE_TREEZOR_KYC_DOCUMENT',
    UPDATE_CURRENT_SCORE = 'UPDATE_CURRENT_SCORE',
    UPDATE_DOCUMENT_LEVEL = 'UPDATE_DOCUMENT_LEVEL',
    VALIDATE_MLC_KYC_DOCUMENTS = 'VALIDATE_MLC_KYC_DOCUMENTS',
    UPLOAD_KYC_DOCUMENT = 'UPLOAD_KYC_DOCUMENT'
}
