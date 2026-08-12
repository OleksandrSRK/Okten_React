import {useNavigate} from "react-router-dom";

const MenuComponent = () => {

    const navigation = useNavigate();

    const goHomeClick =  () => {
        navigation('/')
    }
    const goUsersClick =  () => {
        navigation('/users')
    }

    return (
        <div>
            <button onClick={goHomeClick} className={'font-bold py-2 px-4 rounded'}>Home</button>
            <button onClick={goUsersClick} className={'font-bold py-2 px-4 rounded'}>Users</button>
        </div>
    );
};

export default MenuComponent;