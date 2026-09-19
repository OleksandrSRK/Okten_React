import type {FC} from 'react';
import type {ICar} from "../../models/ICar.ts";
import './CarComponent.css'

type ICarProps = {
    car: ICar;
}

const CarComponent: FC<ICarProps> = ({car}) => {
    return (
        <div className='car-element'>
            {car.id}) {car.brand}
        </div>
    );
};

export default CarComponent;