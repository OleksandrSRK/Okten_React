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

// спільний екземпляр axios додає цю базову адресу до шляхів запитів нижче.
const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth", // базова URL для всіх HTTP-запитів
    headers: {} // спільні заголовки для всіх HTTP-запитів (пусто)
});


// інтерцептор обробляє кожен запит але accessToken додаємо лише до GET-запитів
// для логіну сервер отримує username і password а для оновлення токенів refreshToken у тілі POST-запиту
axiosInstance.interceptors.request.use((requestObject) => {

    // if перевіряє чи це GET-запит
    // method може бути відсутнім і тоді ?. пропускає виклик toUpperCase() умова не спрацьовує і Authorization не додається
    if (requestObject.method?.toUpperCase() === 'GET') {

        // додаємо до захищеного GET-запиту заголовок Authorization у форматі 'Bearer ' + <токен>
        // accessToken беремо зі збережених у localStorage даних користувача.
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }

    /*
        Пояснення чому accessToken додаєм тільки до GET-запиту:
            ми додаємо accessToken лише до GET-запиту бо він повертає захищені дані
            до яких доступ надається тільки після реєстрації/логіну (відповідно після отримання токену)

            в той час як POST /login лише відправляє на сервер username і password
            а POST /refresh передає refreshToken у тілі запиту для отримання нової пари токенів
     */

    return requestObject; // повертаємо оновлену конфігурацію axios з доданим заголовком щоб він міг продовжити надсилання запиту

})

// приймає об'єкт LoginData і дістає з нього username, password та expiresInMins
// після виконання функція повертає дані користувача разом із токенами
export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {

    // post запит який відправляє дані юзера на URL https://dummyjson.com/auth/login
    // та повертає відповідь userWithTokens з даними користувача та токенами
    // <IUserWithTokens> задає очікуваний тип response.data для TypeScript
    // data: userWithTokens дістає поле data з відповіді Axios і дає йому локальне ім'я userWithTokens
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins})

    console.log(userWithTokens); // виведення даних користувача та токенів

    // localStorage зберігає рядки тому JSON.stringify перетворює весь об'єкт користувача з токенами на JSON рядок
    // та зберігаєм токени в локальне сховище
    localStorage.setItem('user', JSON.stringify(userWithTokens));

    return userWithTokens; // повертає дані користувача з токенами
}

// асинхронна функція завантажує продукти й повертає їхній масив
export const loadAuthProducts = async (): Promise<IProducts[]> => {

    // спочатку дістаємо data з відповіді axios
    // тип задає форму тіла відповіді сервера
    const {data} = await axiosInstance.get<IProductsResponseModelType>('/products', {})

    // потім із тіла відповіді дістаємо масив products
    const {products} = data

    return products; // повертає масив продуктів
}

// асинхронна функція оновлює токени використовуючи refreshToken зі збережених даних користувача
export const refresh = async () => {

    // дістаєм з локального сховища дані користувача з токенами
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');

    // надсилаємо refreshToken щоб отримати нову пару токенів
    // <ITokenPair> описує очікувані поля відповіді
    // з data дістаємо обидва токени.
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMins: 1
    });

    // впроваджуємо нові accessToken та refreshToken отриманими значеннями
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;

    localStorage.setItem('user', JSON.stringify(iUserWithTokens)); // зберігаємо оновлені дані користувача як JSON-рядок
}


