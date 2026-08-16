import {useEffect, useState} from "react";
import type {IUser} from "../../models/UserModel.ts";
import type {IUserResponseModel} from "../../models/UserResponseModel.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {userService} from "../../services/api.service.ts";
import {useSearchParams} from "react-router-dom";

const UsersComponent = () => {

    const [searchParams] = useSearchParams({page:'1'})

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        userService.getAllUsers(currentPage)
            .then(({users}:IUserResponseModel) => {
                setUsers(users);
            })
    }, [searchParams]);


    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;