import { ProfileModel } from './profile.model';

export interface UserModel extends Omit<ProfileModel, 'updated_by_user'> {
    resetPasswordToken?: string;
    confirmationToken?: string;
    phoneNumConfirmToken?: string;
    updated_by_user: UserModel | number;
}
