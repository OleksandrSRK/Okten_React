import type {IUserResponseModel} from "../models/UserResponseModel.ts";

const baseUrl = 'https://dummyjson.com';

export const userService = {
    getAllUsers: async (page: string): Promise<IUserResponseModel> => {
        let skip = 0;
        const limit = 30;
        if (+page > 0){
            skip = limit * (+page) - limit;
        }
        return await fetch(baseUrl + '/users' + '?skip=' + skip)
            .then(value => value.json())
    }
};