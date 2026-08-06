import type {IPost} from "./PostModel.ts";

export interface IPostDummyResponse {
    posts: IPost[],
    skip: number,
    total: number,
    limit: number
}