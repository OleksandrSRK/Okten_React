import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/a'}>A Page</Link></li>
                <li><Link to={'/b'}>B Page</Link></li>
            </ul>
        </div>
    );
};

export default Menu;