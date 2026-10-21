import React, {useCallback, useEffect, useMemo, useState} from 'react';
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {

    console.log('users c');

    const arr: number[] = useMemo(() => {
        return [11, 22, 33]
    }, []);

    const foo = useCallback(() => {
        console.log('test')
    },[])

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {setUsers(value)})
    }, []);

    return (
        <div>
            users Component
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};

export default UsersComponent;