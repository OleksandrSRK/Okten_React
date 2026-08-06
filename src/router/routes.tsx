import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePages.tsx";



export const router = createBrowserRouter([
    {path: '/', element: <HomePage/>, children: [
            {path: 'users', element: <div>Users</div>},
            {path: 'posts', element: <div>Posts</div>},
            {path: 'comments', element: <div>Comments</div>},
            {path: 'products', element: <div>Products</div>}
        ]},
]);