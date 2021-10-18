import { UserModel } from '@/typings';
import { RolesEnum } from '@/typings/roles/roles.enum';

export interface RoleModel {
    id: string;
    name: string;
    description?: string;
    type: RolesEnum;
    permissions: PermissionModel[];
    users: UserModel[];
}

