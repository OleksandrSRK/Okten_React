import {Link} from "react-router-dom";
import './MenuComponent.css'

const MenuComponent = () => {
    return (
        <div className={'list-div'}>
            <ul>
                <li>
                    <Link to={''}>Home</Link>
                </li>
                <li>
                    <Link to={'users'}>Users</Link>
                    <ul>
                        <li>
                            <Link to={'users/jsonplaceholder'}>Users - jsonplaceholder</Link>
                        </li>
                        <li>
                            <Link to={'users/dummyjson'}>Users - dummyjson</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to={'posts'}>Posts</Link>
                    <ul>
                        <li>
                            <Link to={'posts/jsonplaceholder'}>Posts - jsonplaceholder</Link>
                        </li>
                        <li>
                            <Link to={'posts/dummyjson'}>Posts - dummyjson</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to={'comments'}>Comments</Link>
                    <ul>
                        <li>
                            <Link to={'comments/jsonplaceholder'}>Comments - jsonplaceholder</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to={'products'}>Products</Link>
                </li>
            </ul>
            <hr/>
        </div>
    );
};

export default MenuComponent;