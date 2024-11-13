export type Post = {
    id: number;
    content: string;
    images: string[];
    author: User;
    isLiked: boolean;
};

export type User = {
    id: number;
    username: string;
    posts: Post[];
    avatar: string;
    bio: string;
    followers: number;
    following: number;
}
