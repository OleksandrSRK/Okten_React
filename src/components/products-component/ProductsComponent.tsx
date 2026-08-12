import type {FC} from "react";
import type {IProduct} from "../../models/ProductModel.ts";
import ProductComponent from "../product-component/ProductComponent.tsx";

type IProductsProps = {
    products: IProduct[];
}

const ProductsComponent:FC<IProductsProps> = ({products}) => {

    return (
        <div className={'border-1 p-5 w-160 m-2 flex flex-col gap-4'}>
            {
                products.map((product: IProduct) => <ProductComponent key={product.id} product={product}/>)
            }
        </div>
    );
};

export default ProductsComponent;