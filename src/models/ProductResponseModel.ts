import type {IProduct} from "./ProductModel.ts";

export interface IProductResponseModel {
    products: IProduct[];
    total: number;
    limit: number;
    skip: number;
}