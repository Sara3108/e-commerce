import { UserRole } from "../enums/userRole.enum";

export interface UserLoginModel {
    username: string;
    password: string;
    role: UserRole;
};