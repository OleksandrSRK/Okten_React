import {type FC, useEffect, useState} from 'react';
import type {IPost} from "../../models/PostModel.ts";
import {postServices} from "../../services/api.service.ts";

type PostsTypeProps = {
    userId: string
}

const PostsComponent: FC<PostsTypeProps> = ({userId}) => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        if (userId) {
            postServices
                .getAllPostsOfUserById(+userId)
                .then(value => setPosts(value));
        }
    }, [userId]);

    return (
    <div>
        {
            posts.map(value => <div key={value.id}>{value.title}</div>)
        }
    </div>
    );
};

export default PostsComponent;