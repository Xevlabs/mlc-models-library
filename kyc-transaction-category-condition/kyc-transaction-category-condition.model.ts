import { KycTransactionCategoryModel } from '../kyc-transaction-category/kyc-transaction-category.model';
import { TimestampModel } from '../common/common.model';

export interface KycTransactionCategoryConditionModel extends TimestampModel {
    id: number,
    inclusiveLowerLimit?: number,
    exclusiveUpperLimit?: number,
    periodDays: number,
    category: KycTransactionCategoryModel
}
