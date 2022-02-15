import { FireblocksApiTransactionStatusEnum } from '../enums/fireblocks-api/fireblocks-api-transaction-status.enum';

export const finalFireblocksTransactionStatuses = [
    FireblocksApiTransactionStatusEnum.COMPLETED,
    FireblocksApiTransactionStatusEnum.CANCELLED,
    FireblocksApiTransactionStatusEnum.REJECTED,
    FireblocksApiTransactionStatusEnum.BLOCKED,
    FireblocksApiTransactionStatusEnum.FAILED,
    FireblocksApiTransactionStatusEnum.STRAPI_REQUEST_FAILED
];
