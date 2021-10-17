export enum ClientRolesEnum {
    CLIENT = "client"
}

export enum AdminRolesEnum {
    ADMIN= "admin",
    SUPER_ADMIN= "super_admin",
}

export type RolesEnum = ClientRolesEnum | AdminRolesEnum
