import {useEffect, useState} from "react";
import {placeholderService} from "../../services/api.service.ts";
import type {ICommentsPlaceholder} from "../../models/placeholder/PlaceholderCommentModel.ts";


const CommentsPlaceholderComponent = () => {
    const [comments, setComments] = useState<ICommentsPlaceholder[]>([]);

    useEffect(() => {
        placeholderService
            .getComments()
            .then(value => setComments(value));
    }, []);
    return (
        <div>
            {
                comments.map(value => <h3 key={value.id}>{value.id}) {value.name}</h3>)
            }
        </div>
    );
};

export default CommentsPlaceholderComponent;