import type {IUser} from "../../models/UserModel.ts";
import type {FC} from "react";

type IUserProps = {
    user: IUser;
}

const UserComponent: FC<IUserProps> = ({user}) => {

    return (
        <div className={"m-2"}>
            {user.id}) {user.firstName} {user.lastName}
        </div>
    );
};

export default UserComponent;