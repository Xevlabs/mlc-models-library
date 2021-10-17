import { ProfileModel } from '@/typings/user/profile.model';

export interface UserModel extends ProfileModel {
    resetPasswordToken?: string;
    confirmationToken?: string;
    phoneNumConfirmToken?: string;
}
