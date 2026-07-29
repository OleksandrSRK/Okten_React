import {useEffect, useState} from "react";
import type {IComment} from "../../models/CommentModel.ts";
import {getComments} from "../../services/api.service.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";

const CommentsComponent = () => {

    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        getComments()
            .then(response => {
                setComments(response);
            });
    }, []);

    return (
        <div>
            {
                comments.map(comment => <CommentComponent key={comment.id} item={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;