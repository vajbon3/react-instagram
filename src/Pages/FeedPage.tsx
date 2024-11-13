import PostComponent from "../Components/PostComponent";
import {Post} from "../types";
import {usePost} from "../Context/PostContext";

export default function FeedPage() {
    const {posts}: {posts: Post[]} = usePost();
    return (
        <div className={"grid md:grid-cols-2 grid-cols-1 gap-4 justify-items-center"}>
            {posts.map(post => (<PostComponent key={post.id} post={post} showUsername={true}/>))}
        </div>
    );
}