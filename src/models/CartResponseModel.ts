import type {ICart} from "./CartModel.ts";

export interface ICartResponseModel {
    carts: ICart[];
    total: number;
    limit: number;
    skip: number;
}