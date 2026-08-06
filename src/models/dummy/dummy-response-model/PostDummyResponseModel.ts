import type {IPostDummy} from "../DummyPostModel.ts";

export interface IPostDummyResponse {
    posts: IPostDummy[],
    skip: number,
    total: number,
    limit: number
}