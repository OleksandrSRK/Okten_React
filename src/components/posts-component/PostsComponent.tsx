import {useEffect, useState} from "react";
import type {IPost} from "../../models/PostModel.ts";
import {getPosts} from "../../services/api.service.ts";
import {PostComponent} from "../post-component/PostComponent.tsx"

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getPosts()
            .then(response => {
               setPosts(response);
            });
    }, []);

    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} item={post}/>)
            }
        </div>
    );
};

export default PostsComponent;