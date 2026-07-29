import type {FC} from 'react';
import type {IComment} from "../../models/CommentModel.ts";
import "./CommentComponent.css"
import {UserComponent} from "../user-componnent/UserComponent.tsx";

type CommentPropType = {
    item: IComment
}

export const CommentComponent: FC<CommentPropType> = ({item}) => {
    return (
        <div className={'div-component'}>
            <h3>
                {item.id}, {item.body}
            </h3>
            <h4>
                {item.postId}
            </h4>
            <h5>
                Likes: {item.likes}
            </h5>
            <div>
                <UserComponent item={item.user}/>
            </div>
        </div>
    );
};