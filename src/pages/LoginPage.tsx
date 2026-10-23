import {useEffect} from "react";
import {login} from "../services/api.service.ts";

const LoginPage = () => {

    useEffect(() => {  // хук useEffect для виконання ефекту login
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1, // задаємо час дії accessToken в одну хвилину
        }); // передавання необхідних (відповідно до документації dummyjson) параметрів в асинхронну функцію login в файлі api.service.ts
    }, []); // ефект запускається після першого рендеру сторінки й не повторюється під час звичайних повторних рендерів

    return (
        <div>
            Login Page
        </div>
    );
};

export default LoginPage;