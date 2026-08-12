import type {ICart} from "../../models/CartModel.ts";
import type {FC} from "react";
import ProductsComponent from "../products-component/ProductsComponent.tsx";

type ICartProps = {
    cart: ICart
}

const CartComponent:FC<ICartProps> = ({cart}) => {

    return (
        <div className={'ml-2'}>
            <p>ID: {cart.id}</p>
            <p>Total: {cart.total}</p>
            <p>Discounted Total: {cart.discountedTotal}</p>
            <p>UserId: {cart.userId}</p>
            <p>Total Products: {cart.totalProducts}</p>
            <p>Total Quantity: {cart.totalQuantity}</p>

            <p>Products:</p>
            <ProductsComponent products={cart.products}/>
        </div>
    );
};

export default CartComponent;