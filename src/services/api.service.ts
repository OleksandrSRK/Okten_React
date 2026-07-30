import type {IProduct} from "../models/ProductModel.ts";
import type {IProductResponseDummyjson} from "../models/ProductResponseDummyjson.ts";

const endPoint = import.meta.env.VITE_API_URL;

const getProducts = async (): Promise<IProduct[]> => {
    const response: IProductResponseDummyjson = await fetch(endPoint)
        .then(value => value.json());

    return response.products;
}


export {
    getProducts
}