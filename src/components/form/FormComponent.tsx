import {useForm} from "react-hook-form";
import type {ICar} from "../../models/ICar.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator.ts";
import {addCar} from "../../services/api.service.ts";
import './FormStyle.css'

const FormComponent = () => {


    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const createHandle = (data: ICar) => {
        addCar(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(createHandle)} className={'form'}>

                <h3>Form</h3>

                <div>
                    <p>Brand</p>
                    <input type="text" {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>


                <div>
                    <p>Price</p>
                    <input type="number" {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>


                <div>
                    <p>Year</p>
                    <input type="number" {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>

                <button>Save car</button>

            </form>
        </div>
    );
};

export default FormComponent;