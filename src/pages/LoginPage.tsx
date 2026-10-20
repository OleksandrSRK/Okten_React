import {useEffect} from "react";
import {login} from "../services/api.service.ts";

const LoginPage = () => {

    useEffect(() => {  // хук useEffect для виконання ефекту login
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1, // час скільки об'єкт буде залишатися в системі
        }); // передавання необхідних (відповідно до документації dummyjson) параметрів в асинхронну функцію login в файлі api.service.ts
    }, [])

    return (
        <div>
            Login Page
        </div>
    );
};

export default LoginPage;