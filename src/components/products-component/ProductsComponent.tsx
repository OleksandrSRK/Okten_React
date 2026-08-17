import {useEffect, useState} from "react";
import type {IProduct} from "../../models/ProductModel.ts";
import type {IProductResponseModel} from "../../models/ProductResponseModel.ts";
import ProductComponent from "../product-component/ProductComponent.tsx";
import {productService} from "../../services/api.service.ts";
import {useSearchParams} from "react-router-dom";

const ProductsComponent = () => {

    const [searchParams] = useSearchParams({page:'1'})

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        productService.getAllProducts(currentPage)
            .then(({products}:IProductResponseModel) => {
                setProducts(products);
            })
    }, [searchParams]);


    return (
        <div>
            {
                products.map((product: IProduct) => <ProductComponent key={product.id} product={product}/>)
            }
        </div>
    );
};

export default ProductsComponent;