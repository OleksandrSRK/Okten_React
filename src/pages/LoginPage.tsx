import {useEffect} from "react";
import {login} from "../services/api.service.ts";

const LoginPage = () => {

    useEffect(() => {
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1,
        });
    }, [])

    return (
        <div>
            Login Page
        </div>
    );
};

export default LoginPage;