import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePages from "./pages/HomePages.tsx";

createRoot(document.getElementById('root')!)
    .render(<BrowserRouter>
        <Routes>
            <Route path={'/'} element={<HomePages/>}>
                <Route path={'users'} element={<div>Users</div>}/>
                <Route path={'posts'} element={<div>Posts</div>}/>
                <Route path={'comments'} element={<div>Comments</div>}/>
                <Route path={'products'} element={<div>Products</div>}/>
            </Route>
        </Routes>
    </BrowserRouter>);





/*
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router/routes.tsx";

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>);
*/