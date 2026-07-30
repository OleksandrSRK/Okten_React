import type {IAddress} from "./AddressModel.ts";
import type {ICompany} from "./CompanyModel.ts";

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
}