import * as axios from "axios";
import type {IUser} from "../model/IUser.ts";

const axiosInstance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'}
})

export const getAllUsers = async (): Promise<IUser[]> => {
    const {data} = await axiosInstance.get<IUser[]>('/users');
    return data;
}

export const saveUser = async (user: IUser): Promise<IUser> => {
    const {data} = await axiosInstance.post(`/users`, user)
    return data;
}

axiosInstance.interceptors.request.use((request) => {

    console.log(request);

    return request;
})

axiosInstance.interceptors.response.use((responce) => {

    console.log(responce);

    return responce;
})