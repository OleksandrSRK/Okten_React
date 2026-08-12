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
        <div className={"m-2"}>
            {user.id}) {user.firstName} {user.lastName}
            <button className={"border-1  ml-2 p-1 rounded"} onClick={onButtonClickNavigate}>Carts data</button>
        </div>
    );
};

export default UserComponent;