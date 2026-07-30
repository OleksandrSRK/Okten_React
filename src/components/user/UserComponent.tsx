import type {FC} from 'react';
import type {IUser} from "../../models/UserModel.ts";

type UserTypeProps = {
    item: IUser
}

const UserComponent: FC<UserTypeProps> = ({item}) => {
    return (
        <div>
            {
                item.username
            }
        </div>
    );
};

export default UserComponent;