import type {FC} from 'react';
import type {IProduct} from "../../modules/Product.ts";

type MyPropsType = {
    product: IProduct;
}

const MyProduct:FC<MyPropsType> = ({product}) => {
    return (
        <div>
            <h2>{product.title}. {product.price}</h2>
            <img src={product.image} alt={product.title} />
        </div>
    );
};

export default MyProduct;