import {useEffect, useState} from "react";
import {getAllUsers} from "../../services/users.api.service.ts";
import type {IUser} from "../../models/UserModel.ts";
import UserComponent from "../user-component/UserComponent.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getAllUsers()
            .then(value => {
                setUsers(value);
            });
    }, []);

    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;