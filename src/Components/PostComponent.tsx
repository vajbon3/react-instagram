import {Post} from "../types";
import Carousel from "./Carousel";
import {Link} from "react-router-dom";
import {TruncatedSpan} from "./TruncatedSpan";

export default function PostComponent({post, showUsername}: { post: Post, showUsername: boolean }) {

    return (
        <div className={"bg-secondary flex items-center w-full justify-center flex-col p-4 rounded-lg"}>
            <div className={"flex gap-4 w-full h-full"}>
                <Carousel post={post}/>
            </div>
            <div className={"flex flex-col w-full gap-4"}>
                {showUsername && <Link to={`/profile/${post.author.username}`}>
                    <h3 className={"flex gap-2"}>
                        <img src={post.author.avatar} alt="" className={"size-6 rounded-full"}/>
                        <span className={"text-text font-bold hover:text-primary"}>{post.author.username}</span>
                    </h3>
                </Link>}
                {showUsername && <hr className={"text-text opacity-25 rounded-full"}/>}
                <p className="text-text">
                    <TruncatedSpan text={post.content} maxLength={100}/>
                </p>
            </div>
        </div>
    );
}