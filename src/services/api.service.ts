import type {IComment} from "../models/CommentModel.ts"

const endPoint = import.meta.env.VITE_API_URL;

const getComments = async (): Promise<IComment[]> => {
    return await fetch(endPoint)
        .then(value => value.json());
}


export {
    getComments
}