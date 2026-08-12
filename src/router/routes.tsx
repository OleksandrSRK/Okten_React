import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import CartsPage from "../pages/CartsPage.tsx";
import UsersComponent from "../components/users-component/UsersComponent.tsx";


export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>, children: [
                    {index: true, element: <UsersComponent/>},
                    {path: ':id/carts', element: <CartsPage/>}
                ]}
        ]},
]);
