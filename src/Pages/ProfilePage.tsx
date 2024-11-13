import {useParams} from "react-router-dom";
import {getUserByUsername} from "../Services/UserService";
import PostComponent from "../Components/PostComponent";

export default function ProfilePage() {
    const {username} = useParams<{ username: string }>();
    if (!username) return null;
    const user = getUserByUsername(username);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            <div className={"panel flex sm:flex-col items-center justify-center md:gap-14"}>
                <div className="flex flex-col items-center">
                    <img src={user.avatar} alt="avatar" className="w-24 h-24 rounded-full"/>
                    <h1 className="text-2xl font-bold mt-4">@{user.username}</h1>
                    <p className="text-gray-500">{user.bio}</p>
                </div>

                <div className="flex items-center justify-center gap-4 flex-wrap">
                    <div className={"flex flex-col items-center"}>
                        <span className="font-bold text-2xl">{user.posts.length}</span>
                        <span>Posts</span>
                    </div>
                    <div className={"flex flex-col items-center"}>
                        <span className="font-bold text-2xl">{user.followers}</span>
                        <span>Followers</span>
                    </div>
                    <div className={"flex flex-col items-center"}>
                        <span className="font-bold text-2xl">{user.following}</span>
                        <span>Following</span>
                    </div>
                </div>
            </div>
            {user.posts.map(post => (<PostComponent post={post} key={post.id} showUsername={false}/>))}
        </div>
    );
}