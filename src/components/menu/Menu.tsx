import {Link} from "react-router";
import "./MenuStyle.css"

const Menu = () => {
    return (
        <div>
            <ul className={"menu-ul"}>
                <li>
                    <Link to={'/cars'} className={'link-menu'}>Cars</Link>
                </li>
                <li>
                    <Link to={'/cars/create'} className={'link-menu'}>Create car</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;