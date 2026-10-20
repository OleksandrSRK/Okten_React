import {Outlet} from "react-router";
import Menu from "../conponents/menu/Menu.tsx";

const MainLayout = () => {
    return (
        <div>
            <Menu/> {/* відображення компоненту Menu */}
            <Outlet/> {/* відображення компоненту відповідно до URL */}
        </div>
    );
};

export default MainLayout;