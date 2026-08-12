import type {IProduct} from "../../models/ProductModel.ts";
import type {FC} from "react";

type IProductProps = {
    product: IProduct;
}

const ProductComponent:FC<IProductProps> = ({product}) => {
    return (
        <div className={'border-1 w-150 pl-2'}>
            <p>ID: {product.id}</p>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Total: {product.total}</p>
            <p>Discount Percentage: {product.discountPercentage}</p>
            <p>Discounted Total: {product.discountedTotal}</p>
            <p>Thumbnail: {product.thumbnail}</p>
        </div>
    );
};

export default ProductComponent;