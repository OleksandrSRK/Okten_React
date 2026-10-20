import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import AuthResourcesPage from "../pages/AuthResourcesPage.tsx";

export const routes = createBrowserRouter([   // Створення браузерний маршрутизатор
    {
        path:'/', element:<MainLayout/>, children:[ // початковій path для завантаження MainLayout
            {index: true, element:<HomePage/>}, // базовый children який підвантажує HomePage за посиланням /
            {path:'/login', element:<LoginPage/>}, // route /login який підвантажує LoginPage
            {path: '/auth/resources', element: <AuthResourcesPage/>} // route /auth/resources який підвантажує AuthResourcesPage
        ]
    }
]);