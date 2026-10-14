import {Link} from "react-router";

const Menu = () => {
    return (
        <div>
            <ul className={'flex gap-4'}>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/auth/resources'}>Auth</Link></li>
            </ul>
        </div>
    );
};

export default Menu;