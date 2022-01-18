export enum TransactionOperationTypeEnum {
    CREATE_DEPOSIT = 'CREATE_DEPOSIT',
    RECEIVE_TREEZOR_TRANSFER_CREATION_WEBHOOK = 'RECEIVE_TREEZOR_TRANSFER_CREATION_WEBHOOK',
    RECEIVE_TREEZOR_TRANSFER_UPDATE_WEBHOOK = 'RECEIVE_TREEZOR_TRANSFER_UPDATE_WEBHOOK',
    RECEIVE_FIREBLOCKS_TRANSACTION_CREATION_WEBHOOK = 'RECEIVE_FIREBLOCKS_TRANSACTION_CREATION_WEBHOOK',
    RECEIVE_FIREBLOCKS_TRANSACTION_UPDATE_WEBHOOK = 'RECEIVE_FIREBLOCKS_TRANSACTION_UPDATE_WEBHOOK',
    FIRST_TRANSFER_CANCELLED = 'FIRST_TRANSFER_CANCELLED',
    CONTINUE_DEPOSIT_AFTER_TRANSFER = 'CONTINUE_DEPOSIT_AFTER_TRANSFER',
    CHECK_IF_TRANSACTION_VALID = 'CHECK_IF_TRANSACTION_VALID',
    FIREBLOCKS_TRANSACTION_ERROR = 'FIREBLOCKS_TRANSACTION_ERROR'
}
