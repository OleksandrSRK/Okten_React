import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProducts} from "../models/IProduct.ts";
import type {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";
import {retriveLocalStorage} from "./helpers.ts";


type LoginData = {
    username: string,
    password: string,
    expiresInMins: number,
}

const axiosInstance = axios.create({ // створюється екземпляр axios
    baseURL: "https://dummyjson.com/auth", // базова URL для всіх HTTP-запитів
    headers: {} // заголовки HTTP-запитів (пусто)
});


// перехоплення всіх запитів
axiosInstance.interceptors.request.use((requestObject) => {

    // беремо від requestObject метод який він використовує (на всякий випадок приводимо до UpperCase)
    // якщо це GET запит то в requestObject в розділ з headers додаємо header Authorization
    // який дорівнює Bearer + беремо (за допомогою retriveLocalStorage) accessToken з локального сховища типу IUserWithTokens
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject; // повертаємо requestObject

})

// асинхронна функція login яка приймає об'єкт LoginData та обіцяє повернення об'єкту типу IUserWithTokens
export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {

    // post запит який відправляє дані юзера на URL https://dummyjson.com/auth/login
    // та повертає відповідь userWithTokens з даними користувача та токенами
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins})

    console.log(userWithTokens); // виведення даних користувача та токенів
    localStorage.setItem('user', JSON.stringify(userWithTokens)); // зберігання токенів в локальне сховище
    return userWithTokens; // повертає дані користувача з токенами
}

// асинхронна функція loadAuthProducts яка обіцяє повернення об'єкту типу IProducts[]
export const loadAuthProducts = async (): Promise<IProducts[]> => {

    // get запит який повертає компонент типу IProductsResponseModelType з URL https://dummyjson.com/auth/products
    // та деструктурує products з data
    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products', {})
    return products; // повертає products
}

// асинхронна функція refresh
export const refresh = async () => {

    // дістаєм з локального сховища дані користувача з токенами
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');

    // постовий запит на URL https://dummyjson.com/auth/refresh
    // та передаєм поточний refreshToken та час дії нового accessToken
    // після чого деструктуруєм данні на accessToken та refreshToken
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMins: 1
    });

    // впроваджуємо нові accessToken та refreshToken отриманими значеннями
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;

    localStorage.setItem('user', JSON.stringify(iUserWithTokens)); // зберігаємо оновленого користувача з новими токенами
}


