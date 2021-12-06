import { ProfileModel } from './profile.model';

export interface UserModel extends ProfileModel {
    resetPasswordToken?: string;
    confirmationToken?: string;
    phoneNumConfirmToken?: string;
    updated_by_user: UserModel | number;
}
