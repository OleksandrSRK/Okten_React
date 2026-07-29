import type {IComment} from "./CommentModel.ts";

export interface ICommentResponseDummyjson {
    comments: IComment[],
    skip: number,
    total: number,
    limit: number
}