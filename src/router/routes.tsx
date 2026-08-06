import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import UsersPlaceholderComponent from "../components/placeholder-components/UsersPlaceholderComponent.tsx";
import PostsPlaceholderComponent from "../components/placeholder-components/PostsPlaceholderComponent.tsx";
import CommentsPlaceholderComponent from "../components/placeholder-components/CommentsPlaceholderComponent.tsx";
import UsersDummyComponent from "../components/dummy-components/UsersDummyComponent.tsx";
import CommentsDummyComponent from "../components/dummy-components/CommentsDummyComponent.tsx";
import PostsDummyComponent from "../components/dummy-components/PostsDummyComponent.tsx";



export const router = createBrowserRouter([
    {path: '/', element: <HomePage/>, children: [
            {path: 'users/jsonplaceholder', element: <UsersPlaceholderComponent/>},
            {path: 'users/dummy', element: <UsersDummyComponent/>},
            {path: 'posts/jsonplaceholder', element: <PostsPlaceholderComponent/>},
            {path: 'posts/dummy', element: <PostsDummyComponent/>},
            {path: 'comments/jsonplaceholder', element: <CommentsPlaceholderComponent/>},
            {path: 'comments/dummy', element: <CommentsDummyComponent/>}
        ]},
]);