import type {ITodo} from "../models/TodoModel.ts";

const endPoint = import.meta.env.VITE_API_URL;

const getTodos = async (): Promise<ITodo[]> => {
    return await fetch(endPoint)
        .then(value => value.json());
}


export {
    getTodos
}