import type {IPost} from "../models/PostModel.ts";
import type {IPostDummyResponse} from "../models/PostDummyResponseModel.ts";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getAllPosts = async (): Promise<IPost[]> => {
    const response: IPostDummyResponse = await fetch(
        `${baseUrl}/posts`
    ).then(value => value.json());

    return response.posts
}