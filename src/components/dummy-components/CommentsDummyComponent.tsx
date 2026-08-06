import {useEffect, useState} from 'react';
import {dummyServices} from "../../services/api.service.ts";
import type {ICommentDummy} from "../../models/dummy/DummyCommentModel.ts";

const CommentsDummyComponent = () => {
    const [comments, setComments] = useState<ICommentDummy[]>([]);

    useEffect(() => {
        dummyServices
            .getComments()
            .then(value => setComments(value));
    }, []);
    return (
        <div>
            {
                comments.map(value => <h3 key={value.id}>{value.id}) {value.body}</h3>)
            }
        </div>
    );
};

export default CommentsDummyComponent;