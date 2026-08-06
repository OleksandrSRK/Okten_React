import {urls} from "../constants/urls.ts"
import type {IUserPlaceholder} from "../models/placeholder/PlaceholderUserModel.ts";
import type {IPostPlaceholder} from "../models/placeholder/PlaceholderPostModel.ts";
import type {ICommentsPlaceholder} from "../models/placeholder/PlaceholderCommentModel.ts";
import type {IUserDummyResponse} from "../models/dummy/dummy-response-model/UserDummyResponseModel.ts";
import type {IPostDummyResponse} from "../models/dummy/dummy-response-model/PostDummyResponseModel.ts";
import type {ICommentDummyResponse} from "../models/dummy/dummy-response-model/CommentDummyResponseModel.ts";
import type {IUserDummy} from "../models/dummy/DummyUserModel.ts";
import type {IPostDummy} from "../models/dummy/DummyPostModel.ts";
import type {ICommentDummy} from "../models/dummy/DummyCommentModel.ts";

export const placeholderService = {
    getUsers: async(): Promise<IUserPlaceholder[]> => {
        return await fetch(urls.usersPlaceholder.allUsers)
            .then(value => value.json());
    },
    getPosts: async(): Promise<IPostPlaceholder[]> => {
        return await fetch(urls.postsPlaceholder.allPosts)
            .then(value => value.json());
    },
    getComments: async(): Promise<ICommentsPlaceholder[]> => {
        return await fetch(urls.commentsPlaceholder.allPosts)
            .then(value => value.json());
    }
}

export const dummyServices = {
    getUsers: async (): Promise<IUserDummy[]> => {
        const response: IUserDummyResponse = await fetch(
            urls.usersDummy.allUsers
        ).then(value => value.json());

        return response.users;
    },
    getPosts: async (): Promise<IPostDummy[]> => {
        const response: IPostDummyResponse = await fetch(
            urls.postsDummy.allPosts
        ).then(value => value.json());

        return response.posts;
    },

    getComments: async (): Promise<ICommentDummy[]> => {
        const response: ICommentDummyResponse = await fetch(
            urls.commentsDummy.allPosts
        ).then(value => value.json());

        return response.comments;
    },
}