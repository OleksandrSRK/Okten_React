import type {IUser} from "./UserModel.ts";

export interface IUserDummyResponse {
    users: IUser[],
    skip: number,
    total: number,
    limit: number
}