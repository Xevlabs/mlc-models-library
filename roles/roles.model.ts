import { UserModel } from '../user/user.model';
import { RolesEnum } from '../roles/roles.enum';

export interface RoleModel {
    id: number;
    name: string;
    description?: string;
    type: RolesEnum;
    users: UserModel[];
}

