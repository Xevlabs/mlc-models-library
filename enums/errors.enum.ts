export enum ErrorsEnum {
    ACCOUNT_EMAIL_NOT_CONFIRMED = 'ACCOUNT_EMAIL_NOT_CONFIRMED',
    ACCOUNT_EMAIL_ALREADY_CONFIRMED = 'ACCOUNT_EMAIL_ALREADY_CONFIRMED',
    AVAILABLE_AMOUNT_UNDER_MINIMUM_REQUIRED = 'AVAILABLE_AMOUNT_UNDER_MINIMUM_REQUIRED',
    BAD_IMPLEMENTATION = 'BAD_IMPLEMENTATION',
    BLOCKED_USER = 'BLOCKED_USER',
    CANNOT_DO_THIS_ACTION_WHILE_A_TRANSACTION_IS_UNFINISHED = 'CANNOT_DO_THIS_ACTION_WHILE_A_TRANSACTION_IS_UNFINISHED',
    CANNOT_DELETE ='CANNOT_DELETE',
    CANNOT_UNFREEZE_REFUSED_KYC = 'CANNOT_UNFREEZE_REFUSED_KYC',
    COMMON_WALLET_EXISTS = 'COMMON_WALLET_EXISTS',
    COMPANY_HAS_INVALID_KYC_USER = 'COMPANY_HAS_INVALID_KYC_USER',
    COMPANY_HAS_NO_USER = 'COMPANY_HAS_NO_USER',
    CONTENT_NOT_FOUND = 'CONTENT_NOT_FOUND',
    COUNTRY_REQUIRES_TAX_ID = 'COUNTRY_REQUIRES_TAX_ID',
    DEFAULT_ROLE_NOT_FOUND = 'DEFAULT_ROLE_NOT_FOUND',
    DISABLED_PROVIDER = 'DISABLED_PROVIDER',
    DOCUMENT_ACCESS_FORBIDDEN_BY_TREEZOR = 'DOCUMENT_ACCESS_FORBIDDEN_BY_TREEZOR',
    DOCUMENT_ALREADY_EXISTS = 'DOCUMENT_ALREADY_EXISTS',
    BENEFICIARY_ALREADY_EXISTS = 'BENEFICIARY_ALREADY_EXISTS',
    EMAIL_ALREADY_TAKEN = 'EMAIL_ALREADY_TAKEN',
    INVALID_USER_KYC = 'INVALID_USER_KYC',
    FIELD_ALREADY_USED = 'FIELD_ALREADY_USED',
    FIELD_NOT_EDITABLE = 'FIELD_NOT_EDITABLE',
    FIELD_REQUIRED = 'FIELD_REQUIRED',
    FILE_ALREADY_VALIDATED = 'FILE_ALREADY_VALIDATED',
    FORBIDDEN = 'FORBIDDEN',
    INCORRECT_CODE = 'INCORRECT_CODE',
    INCORRECT_EMAIL_FORMAT = 'INCORRECT_EMAIL_FORMAT',
    INCORRECT_PARAMS = 'INCORRECT_PARAMS',
    INVALID_TOKEN = 'INVALID_TOKEN',
    METHOD_NOT_ALLOWED = 'METHOD_NOT_ALLOWED',
    MISSING_REQUIRED_TREEZOR_DOCUMENT = 'MISSING_REQUIRED_TREEZOR_DOCUMENT',
    NON_EXISTING_EMAIL = 'NON_EXISTING_EMAIL',
    NON_MATCHING_PASSWORDS = 'NON_MATCHING_PASSWORDS',
    REGISTRATION_DISABLED = 'REGISTRATION_DISABLED',
    REQUEST_CONTENT_ERROR = 'REQUEST_CONTENT_ERROR',
    TREEZOR_API_ERROR = 'TREEZOR_API_ERROR',
    UNAUTHORIZED = 'UNAUTHORIZED',
    USE_ACCOUNT_PROVIDER = 'USE_ACCOUNT_PROVIDER',
    USER_NOT_AWAITING_SCREENING_RETRY = 'USER_NOT_AWAITING_SCREENING_RETRY',
    USER_NOT_AWAITING_WORLD_CHECK_REVIEW = 'USER_NOT_AWAITING_WORLD_CHECK_REVIEW',
    USER_NOT_WAITING_DOCS = 'USER_NOT_WAITING_DOCS',
    USER_ROLE_INVALID = 'USER_ROLE_INVALID',
    USERNAME_ALREADY_TAKEN = 'USERNAME_ALREADY_TAKEN',
    WORLD_CHECK_ERROR = 'WORLD_CHECK_ERROR',
    WRONG_CREDENTIALS = 'WRONG_CREDENTIALS',
    RISK_PROFILE_OVERLAP = 'RISK_PROFILE_OVERLAP'
}
