import type {IProducts} from "./IProduct.ts";

// описує відповідь dummyjson зі списком продуктів і метаданими пагінації
export type IProductsResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    products: IProducts[]
}