import {useEffect, useState} from "react";
import {placeholderService} from "../../services/api.service.ts";
import type {IPostPlaceholder} from "../../models/placeholder/PlaceholderPostModel.ts";


const PostsPlaceholderComponent = () => {
    const [posts, setPosts] = useState<IPostPlaceholder[]>([]);

    useEffect(() => {
        placeholderService
            .getPosts()
            .then(value => setPosts(value));
    }, []);
    return (
        <div>
            {
                posts.map(value => <h3 key={value.id}>{value.id}) {value.title}</h3>)
            }
        </div>
    );
};

export default PostsPlaceholderComponent;