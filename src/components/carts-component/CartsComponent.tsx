import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {ICart} from "../../models/CartModel.ts";
import type {ICartResponseModel} from "../../models/CartResponseModel.ts";
import {cartService} from "../../services/api.service.ts";
import CartComponent from "../cart-component/CartComponent.tsx";

const CartsComponent = () => {

    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([])

    useEffect(() => {
        if (id) {
            cartService.getCartsOfUser(id)
                .then(({carts}:ICartResponseModel) => {
                    setCarts(carts);
                });
        }
    }, [id]);

    return (
        <div>
            {
                carts.map((cart: ICart) => <CartComponent key={cart.id} cart={cart}/>)
            }
        </div>
    );
};


export default CartsComponent;