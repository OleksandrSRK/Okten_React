import type {IGeo} from "./GeoModel.ts";

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}