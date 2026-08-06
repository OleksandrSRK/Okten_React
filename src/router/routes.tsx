import {createBrowserRouter, Outlet} from "react-router-dom";
import HomePage from "../pages/HomePages.tsx";



export const router = createBrowserRouter([
    {path: '/', element: <HomePage/>, children: [
            {path: 'users', element: <div>Users <Outlet/></div> , children: [
                    {path: 'jsonplaceholder', element: <div>Users: JSON Placeholder</div>},
                    {path: 'dummyjson', element: <div>Users: Dummy JSON</div>}
                ]},
            {path: 'posts', element: <div>Posts <Outlet/></div>, children: [
                    {path: 'jsonplaceholder', element: <div>Posts: JSON Placeholder</div>},
                    {path: 'dummyjson', element: <div>Posts: Dummy JSON</div>}
                ]},
            {path: 'comments', element: <div>Comments <Outlet/></div>, children: [
                    {path: 'jsonplaceholder', element: <div>Comments: JSON Placeholder</div>}
                ]},
            {path: 'products', element: <div>Products</div>}
        ]},
]);