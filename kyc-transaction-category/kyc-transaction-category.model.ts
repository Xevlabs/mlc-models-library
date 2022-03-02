import { KycTransactionCategoryConditionModel } from '../kyc-transaction-category-condition/kyc-transaction-category-condition.model';
import { TimestampModel } from '../common/common.model';

export interface KycTransactionCategoryModel extends TimestampModel {
    id: number,
    name: string,
    addedPoints: number,
    conditions: KycTransactionCategoryConditionModel
}
