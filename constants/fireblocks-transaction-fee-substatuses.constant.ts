import { FireblocksApiTransactionSubStatusEnum } from '../enums/fireblocks-api/fireblocks-api-transaction-sub-status.enum';

export const fireblocksTransactionFeeSubstatuses = [
    FireblocksApiTransactionSubStatusEnum.ACTUAL_FEE_TOO_HIGH,
    FireblocksApiTransactionSubStatusEnum.FAIL_ON_LOW_FEE,
    FireblocksApiTransactionSubStatusEnum.INSUFFICIENT_FUNDS_FOR_FEE,
    FireblocksApiTransactionSubStatusEnum.MAX_FEE_EXCEEDED,
    FireblocksApiTransactionSubStatusEnum.INVALID_FEE,
    FireblocksApiTransactionSubStatusEnum.INVALID_FEE_PARAMS
];
