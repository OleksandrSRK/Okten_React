import type { IProduct } from "./ProductModel";

export interface IProductResponseDummyjson {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}