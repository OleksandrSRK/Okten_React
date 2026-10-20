import type {IProducts} from "./IProduct.ts";

export type IProductsResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    products: IProducts[]
}