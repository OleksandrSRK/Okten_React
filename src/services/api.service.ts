import type {IComment} from "../models/CommentModel.ts";
import type {ICommentResponseDummyjson} from "../models/CommentResponseDummyjson.ts";

const endPoint = import.meta.env.VITE_API_URL;

const getComments = async (): Promise<IComment[]> => {
    const response: ICommentResponseDummyjson = await fetch(endPoint)
        .then(value => value.json());

    return response.comments;
}


export {
    getComments
}