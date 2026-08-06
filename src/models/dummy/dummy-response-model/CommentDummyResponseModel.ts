import type {ICommentDummy} from "../DummyCommentModel.ts";

export interface ICommentDummyResponse {
    comments: ICommentDummy[],
    skip: number,
    total: number,
    limit: number
}