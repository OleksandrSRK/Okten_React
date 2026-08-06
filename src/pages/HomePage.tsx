import {Outlet} from "react-router-dom";
import MenuComponent from "../components/menu-component/MenuComponent.tsx";
import './HomePage.css'

const HomePage = () => {
    return (
        <div>
            <MenuComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default HomePage;