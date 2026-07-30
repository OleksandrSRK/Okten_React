import {useEffect, useState} from 'react';
import type {IUser} from "../../models/UserModel.ts";
import UserComponent from "../user/UserComponent.tsx";
import {userService} from "../../services/api.service.ts";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getUsers().then((allUsers) => {
            setUsers(allUsers);
        })
    }, []);

    return (
        <div>
            {
                users.map(user => <UserComponent item={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;