import {Link} from "react-router";

const Menu = () => {
    return (
        <div>
            <ul className={'flex gap-4'}> {/* створення списку навігації */}
                <li><Link to={'/'}>Home</Link></li> {/* при натисканні на Home ставити в посилання базовий route (/) */}
                <li><Link to={'/login'}>Login</Link></li> {/* при натисканні на Login ставити в посилання /login */}
                <li><Link to={'/auth/resources'}>Auth</Link></li> {/* при натисканні на Auth ставити в посилання /auth/resources */}
            </ul>
        </div>
    );
};

export default Menu;