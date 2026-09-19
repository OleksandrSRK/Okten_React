import {useEffect, useState} from 'react';
import CarComponent from "../car-conponent/CarComponent.tsx";
import type {ICar} from "../../models/ICar.ts";
import {getCars} from "../../services/api.service.ts";

const CarListComponent = () => {


    const [cars, setCars] = useState<ICar[]>([])

    useEffect(() => {
        getCars().then((cars) => {
            setCars(cars);
        })
    }, []);

    return (
        <div>
            {cars.map((car) => (<CarComponent car={car} key={car.id}/>))}
        </div>
    );
};

export default CarListComponent;