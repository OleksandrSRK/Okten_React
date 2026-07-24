import {useEffect, useState} from 'react';
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response);
            });
        return () => {
            console.log('done');
        }
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