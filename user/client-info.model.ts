import { BaseModel } from '../base/base.model';
import { TreezorUserModel } from './treezor-user.model';
import { FireblocksUserModel } from './fireblocks-user.model';
import { DbLinkModel } from '../common/common.model';
import { AddressModel } from '../address/address.model';

export interface ClientInfoModel extends BaseModel {
    treezorUser: TreezorUserModel,
    fireblocksUser: FireblocksUserModel,
    addresses: AddressModel[],
    mainAddress: AddressModel,
    earningCoefficient: number
}

export interface ClientInfoFormModel {
    treezorUser?: DbLinkModel,
    fireblocksUser?: DbLinkModel,
    addresses: DbLinkModel[],
    mainAddress: DbLinkModel,
    earningCoefficient: number
}
