import {useEffect, useState} from "react";
import type {IProduct} from "../../models/ProductModel.ts";
import {getProducts} from "../../services/api.service.ts";
import {ProductComponent} from "../product-component/ProductComponent.tsx";
import "./ProductsComponent.css"

export const ProductsComponent = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response);
            });
    }, []);

    return (
        <div>
            {
                products.map(product => <ProductComponent key={product.id} item={product}/>)
            }
        </div>
    );
};