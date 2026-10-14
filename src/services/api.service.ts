import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProducts} from "../models/IProduct.ts";
import type {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";


type LoginData = {
    username: string,
    password: string,
    expiresInMins: number,
}

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers: {}
});

const retriveLocalStorage = <T>(key: string) => {
    const object = localStorage.getItem(key) || '';
    if (!object) {
        return {} as T;
    }
    const parse = JSON.parse(object);
    return parse as T;
}

axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject;

})

export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins})
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

export const loadAuthProducts = async (): Promise<IProducts[]> => {
    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products', {})
    return products;
}

export const refresh = async () => {

    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMin: 1
    });
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));


}


