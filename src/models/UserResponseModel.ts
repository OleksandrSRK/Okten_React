import type {IUser} from "./UserModel.ts";

export interface IUserResponseModel {
    users: IUser[];
    total: number;
    limit: number;
    skip: number;
}