import { TimestampModel } from '../common/common.model';

export interface RoleModel {
    id: string;
    name: string;
    description?: string;
    type?: string;
    permissions: PermissionModel[];
    users: UserModel[];
}

export interface UserModel extends ProfileModel {
    password?: string;
    resetPasswordToken?: string;
    confirmationToken?: string;
    phoneNumConfirmToken?: string;
}

export interface ProfileModel extends TimestampModel {
    id: string;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    role: RoleModel;
}
