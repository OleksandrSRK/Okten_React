import type {FC} from 'react';
import type {IUser} from "../../models/UserModel.ts";
import {Link, useNavigate} from "react-router-dom";

type UserTypeProps = {
    item: IUser
}

const UserComponent: FC<UserTypeProps> = ({item}) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('posts/' + item.id, {state: item});
    };
    return (
        <div>
            <Link to={'details'} state={item}>{item.username}</Link>

            <button onClick={handleOnClick}>details</button>
        </div>
    );
};

export default UserComponent;