const baseUrlJsonplaceholder = 'https://jsonplaceholder.typicode.com';
const baseUrlDummyjson = 'https://dummyjson.com';

export const urls = {

    // Placeholder
    usersPlaceholder:{
        allUsers:baseUrlJsonplaceholder+'/users'
    },
    postsPlaceholder:{
        allPosts:baseUrlJsonplaceholder+'/posts'
    },
    commentsPlaceholder:{
        allPosts:baseUrlJsonplaceholder+'/comments'
    },

    // Dummyjson
    usersDummy:{
        allUsers:baseUrlDummyjson+'/users'
    },
    postsDummy:{
        allPosts:baseUrlDummyjson+'/posts'
    },
    commentsDummy:{
        allPosts:baseUrlDummyjson+'/comments'
    }
}