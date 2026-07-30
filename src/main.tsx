import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import APage from "./components/pages/APage.tsx";
import BPage from "./components/pages/BPage.tsx";
import HomePage from "./components/pages/HomePage.tsx";


const router = createBrowserRouter([
    {path:'/', element: <MainLayout/>,
        children: [
            {path: '', element: <HomePage/>},
            {path: 'a', element: <APage/>},
            {
                path: 'b', element: <BPage/>, children: [
                    {path: '1', element: <div>content 1</div>},
                    {path: '2', element: <div>content 2</div>},
                    {path: '3', element: <div>content 3</div>}
                ]
            }]
    }
])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>);
