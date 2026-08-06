import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/posts'}>Users</Link>
                </li>
                <li>
                    <Link to={'/posts'}>Posts</Link>
                </li>
            </ul>
        </div>
    );
};

export default MenuComponent;