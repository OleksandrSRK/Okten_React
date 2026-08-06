import type {IUser} from "../models/UserModel.ts";
import type {IUserDummyResponse} from "../models/UserDummyResponseModel.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getAllUsers = async (): Promise<IUser[]> => {
    const response: IUserDummyResponse = await fetch(
        `${baseUrl}/users`
    ).then(value => value.json());

    return response.users
}