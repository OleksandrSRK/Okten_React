import type {IPost} from "../models/PostModel.ts";

const endPoint = import.meta.env.VITE_API_URL;

const getPosts = async (): Promise<IPost[]> => {
    return await fetch(endPoint)
        .then(value => value.json());
}


export {
    getPosts
}