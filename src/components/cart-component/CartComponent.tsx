import type {ICart} from "../../models/CartModel.ts";
import type {FC} from "react";

type ICartProps = {
    cart: ICart
}

const CartComponent:FC<ICartProps> = ({cart}) => {

    return (
        <div>
            {cart.total}
        </div>
    );
};

export default CartComponent;