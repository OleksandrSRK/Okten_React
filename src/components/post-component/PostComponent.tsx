import type {IPost} from "../../models/PostModel.ts";

interface PostComponentProps {
    post: IPost
}


const PostComponent = ({post}: PostComponentProps) => {

    return (
        <div>
            {post.id} {post.title}
        </div>
    );
};

export default PostComponent;