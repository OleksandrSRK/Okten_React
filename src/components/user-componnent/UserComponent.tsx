import type {FC} from 'react';
import type {IUser} from "../../models/CommentModel.ts";
import "./UserComponent.css"

type UserPropType = {
    item: IUser
}

export const UserComponent: FC<UserPropType> = ({item}) => {
    return (
        <div className={'div-component-user'}>
            <h3>
                {item.id}
            </h3>
            <h4>
                {item.username}
            </h4>
            <p>
                {item.fullName}
            </p>
        </div>
    );
};