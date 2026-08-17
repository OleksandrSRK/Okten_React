import type {IProductResponseModel} from "../models/ProductResponseModel.ts";

const baseUrl = 'https://dummyjson.com';

export const productService = {
    getAllProducts: async (page: string): Promise<IProductResponseModel> => {
        let skip = 0;
        const limit = 30;
        if (+page > 0){
            skip = limit * (+page) - limit;
        }
        return await fetch(baseUrl + '/products' + '?skip=' + skip)
            .then(value => value.json())
    }
};