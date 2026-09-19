import * as axios from "axios";
import type {ICar} from "../models/ICar.ts";

const axiosInstance = axios.create({
    baseURL: 'http://bigbird.space/carsAPI/v1',
    headers: {'Content-Type': 'application/json'}
});

export const getCars = async (): Promise<ICar[]> => {
    const axiosResponce = await axiosInstance.get<ICar[]>("/cars");
    console.log(axiosResponce);
    const cars = axiosResponce.data
    console.log(cars);
    return cars;
}


export const addCar = async (car: ICar) => {
    await axiosInstance.post("/cars", car);
}