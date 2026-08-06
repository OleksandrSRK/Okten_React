import type {IUser} from "../../models/UserModel.ts";

interface UserComponentProps {
    user: IUser
}

const UserComponent = ({user}: UserComponentProps) => {

    return (
        <div>
            {user.id}) {user.firstName} {user.lastName}
        </div>
    );
};

export default UserComponent;