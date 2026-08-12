import type {IUser} from "../../models/UserModel.ts";
import {useNavigate} from "react-router-dom";
import type {FC} from "react";

type IUserProps = {
    user: IUser;
}

const UserComponent: FC<IUserProps> = ({user}) => {

    const navigation = useNavigate();

    const onButtonClickNavigate =  () => {
        navigation('/users/' + user.id + '/carts')
    }

    return (
        <div>
            {user.id}) {user.firstName} {user.lastName}
            <button className={"border-1"} onClick={onButtonClickNavigate}>Data</button>
        </div>
    );
};

export default UserComponent;