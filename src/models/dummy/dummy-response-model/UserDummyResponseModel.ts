import type {IUserDummy} from "../DummyUserModel.ts";

export interface IUserDummyResponse {
    users: IUserDummy[],
    skip: number,
    total: number,
    limit: number
}