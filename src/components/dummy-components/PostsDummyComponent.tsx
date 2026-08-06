import {useEffect, useState} from 'react';
import {dummyServices} from "../../services/api.service.ts";
import type {IPostDummy} from "../../models/dummy/DummyPostModel.ts";

const PostsDummyComponent = () => {
    const [posts, setPosts] = useState<IPostDummy[]>([]);

    useEffect(() => {
        dummyServices
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

export default PostsDummyComponent;