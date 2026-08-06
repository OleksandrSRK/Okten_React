import {useEffect, useState} from "react";
import type {IPost} from "../../models/PostModel.ts";
import {getAllPosts} from "../../services/posts.api.service.ts";
import PostComponent from "../post-component/PostComponent.tsx";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getAllPosts()
            .then(value => {
                setPosts(value);
            });
    }, []);

    return (
        <div>
            {
                posts.map((post: IPost) => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;