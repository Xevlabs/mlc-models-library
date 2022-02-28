import { BeneficiaryModel } from '../beneficiary/beneficiary.model';
import { TreezorUserModel } from '../user/treezor-user.model';
import { TimestampModel } from '../common/common.model';
import { StrapiTreezorPayinFormModel } from '../treezor-payin/treezor-payin.model';

export interface PayInModel extends TimestampModel, Omit<StrapiTreezorPayinFormModel, 'treezorUser' | 'beneficiary'> {
    id: number,
    beneficiary?: BeneficiaryModel,
    treezorUser?: TreezorUserModel
}
