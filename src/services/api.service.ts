import type {IUserResponseModel} from "../models/UserResponseModel.ts";
import type {ICartResponseModel} from "../models/CartResponseModel.ts";

const baseUrl = 'https://dummyjson.com';

const userService = {
    getAllUsers: async (): Promise<IUserResponseModel> => {
        return await fetch(baseUrl + '/users')
            .then(value => value.json())
    }
};
const cartService = {
    getCartsOfUser: async (userId: string): Promise<ICartResponseModel> => {
        return await fetch(baseUrl + '/carts/user/' + userId)
            .then(res => res.json())
    }
};


export {
    userService,
    cartService
}