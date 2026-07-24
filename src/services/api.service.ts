import type {IUser} from "../models/IUser.ts";

const baseUrl = import.meta.env.VITE_API_URL;

const getUsers = async (): Promise<IUser[]> => {
    return await fetch(baseUrl)
        .then(value => value.json());
}

const getUser = async (id: string): Promise<IUser[]> => {
    return await fetch(baseUrl + '/' + id)
        .then(value => value.json());
}


export {
    getUsers,
    getUser
}