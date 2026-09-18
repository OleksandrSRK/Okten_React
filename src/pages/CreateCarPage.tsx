import {useForm} from "react-hook-form";
import type {ICar} from "../models/ICar.ts";
import {carValidator} from "../validators/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {addCar} from "../services/api.service.ts";


const CreateCarPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const createHandle = (data: ICar) => {
        addCar(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(createHandle)}>

                <div>
                    <input type="text" {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>


                <div>
                    <input type="number" {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>


                <div>
                    <input type="number" {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>

                <button>Save car</button>

            </form>
        </div>
    );
};

export default CreateCarPage;