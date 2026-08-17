import {useNavigate} from "react-router-dom";

const MenuComponent = () => {

    const navigation = useNavigate();

    const goHomeClick =  () => {
        navigation('/')
    }
    const goProductsClick =  () => {
        navigation('/products')
    }

    return (
        <div>
            <button onClick={goHomeClick} className={'font-bold py-2 px-4 rounded'}>Home</button>
            <button onClick={goProductsClick} className={'font-bold py-2 px-4 rounded'}>Products</button>
        </div>
    );
};

export default MenuComponent;