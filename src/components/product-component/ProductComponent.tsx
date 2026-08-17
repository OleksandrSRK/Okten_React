import type {IProduct} from "../../models/ProductModel.ts";
import type {FC} from "react";

type IProductProps = {
    product: IProduct;
}

const ProductComponent: FC<IProductProps> = ({product}) => {

    return (
        <div className={"m-2"}>
            {product.id}) {product.title}
        </div>
    );
};

export default ProductComponent;