import type {IUserPlaceholder} from "../../models/placeholder/PlaceholderUserModel.ts";
import {useEffect, useState} from "react";
import {placeholderService} from "../../services/api.service.ts";


const UsersPlaceholderComponent = () => {
    const [users, setUsers] = useState<IUserPlaceholder[]>([]);

    useEffect(() => {
        placeholderService
            .getUsers()
            .then(value => setUsers(value));
    }, []);
    return (
        <div>
            {
                users.map(value => <h3 key={value.id}>{value.id}) {value.name}</h3>)
            }
        </div>
    );
};

export default UsersPlaceholderComponent;