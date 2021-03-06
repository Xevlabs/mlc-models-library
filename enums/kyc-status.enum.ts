export enum KycStatusEnum {
    NONE = 'NONE',
    WAITING_LIVENESS = 'WAITING_LIVENESS',
    ENDING_LIVENESS = 'ENDING_LIVENESS',
    AWAITING_VALID_PAYIN = 'AWAITING_VALID_PAYIN',
    WAITING_TREEZOR_RESULTS = 'WAITING_TREEZOR_RESULTS',
    WORLD_CHECK_SCREENING_FAILED = 'WORLD_CHECK_SCREENING_FAILED',
    WORLD_CHECK_REVIEW = 'WORLD_CHECK_REVIEW',
    WAITING_RISK_SCORE = 'WAITING_RISK_SCORE',
    WAITING_DOCS = 'WAITING_DOCS',
    VALIDATED = 'VALIDATED',
    REFUSED = 'REFUSED',
    SUSPICIOUS_TRANSFER = 'SUSPICIOUS_TRANSFER',
    WAITING_FOR_DOCS_CLIENT_AND_REVIEW_REQUEST = 'WAITING_FOR_DOCS_CLIENT_AND_REVIEW_REQUEST'
}
