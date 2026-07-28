import type {FC} from 'react';
import type {IPost} from "../../models/PostModel.ts";
import "./PostComponent.css"

type PostPropType = {
    item: IPost
}

export const PostComponent: FC<PostPropType> = ({item}) => {
    return (
        <div className={'div-component'}>
            <h2>
                {item.userId}, {item.id}
            </h2>
            <h4>
                {item.title}
            </h4>
            <p>
                {item.body}
            </p>
        </div>
    );
};