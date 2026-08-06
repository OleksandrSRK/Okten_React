import {Link} from "react-router-dom";
import './MenuComponent.css'

const MenuComponent = () => {
    return (
        <div className={'list-div'}>
            <ul>
                <li>
                    <Link to={''} className={'text-blue-900'}>Home</Link>
                </li>
                <li>
                    Users:
                    <ul className={'ul-child'}>
                        <li>
                            <Link to={'users/jsonplaceholder'}>Users - jsonplaceholder</Link>
                        </li>
                        <li>
                            <Link to={'users/dummy'}>Users - dummyjson</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    Posts:
                    <ul className={'ul-child'}>
                        <li>
                            <Link to={'posts/jsonplaceholder'}>Posts - jsonplaceholder</Link>
                        </li>
                        <li>
                            <Link to={'posts/dummy'}>Posts - dummyjson</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    Comments:
                    <ul className={'ul-child'}>
                        <li>
                            <Link to={'comments/jsonplaceholder'}>Comments - jsonplaceholder</Link>
                        </li>
                        <li>
                            <Link to={'comments/dummy'}>Comments - dummyjson</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default MenuComponent;