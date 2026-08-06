import {useEffect, useState} from 'react';
import {dummyServices} from "../../services/api.service.ts";
import type {IUserDummy} from "../../models/dummy/DummyUserModel.ts";

const UsersDummyComponent = () => {
    const [users, setUsers] = useState<IUserDummy[]>([]);

    useEffect(() => {
        dummyServices
            .getUsers()
            .then(value => setUsers(value));
    }, []);
    return (
        <div>
            {
                users.map(value => <h3 key={value.id}>{value.id}) {value.firstName} {value.lastName}</h3>)
            }
        </div>
    );
};

export default UsersDummyComponent;