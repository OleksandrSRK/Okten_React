import type {FC} from 'react';
import type {IComment} from "../../ models/CommentModel.ts";
import "./PostComponent.css"

type CommentPropType = {
    item: IComment
}

export const CommentComponent: FC<CommentPropType> = ({item}) => {
    return (
        <div className={'div-component'}>
            <h2>
                {item.postId}, {item.id}
            </h2>
            <h4>
                {item.name}
            </h4>
            <h5>
                {item.email}
            </h5>
            <p>
                {item.body}
            </p>
        </div>
    );
};