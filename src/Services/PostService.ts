import {Post} from "../types";
import {getUserByUsername} from "./UserService";

export function getPosts(): Post[] {
    const jane = getUserByUsername('JaneDoe', false);
    const john = getUserByUsername('JohnDoe', false);
    return [
        {id: 1, content: "This is the first post.", author: jane, images: ["https://picsum.photos/600/400", "https://picsum.photos/700/400"], isLiked: true},
        {id: 2, content: "This is the second post.", author: john, images: ["https://picsum.photos/800/500", "https://picsum.photos/900/500"], isLiked: false},
        {id: 3, content: "This is the third post.", author: jane, images: ["https://picsum.photos/1000/600", "https://picsum.photos/1100/600"], isLiked: true},
        {id: 4, content: "This is the fourth post.", author: john, images: ["https://picsum.photos/1200/700", "https://picsum.photos/1300/700"], isLiked: false},
        {id: 5, content: "This is the fifth post.", author: jane, images: ["https://picsum.photos/1400/800", "https://picsum.photos/1500/800"], isLiked: true},
        {id: 6, content: "This is the sixth post.", author: john, images: ["https://picsum.photos/1600/900", "https://picsum.photos/1700/900"], isLiked: false},
        {id: 7, content: "This is the seventh post.", author: jane, images: ["https://picsum.photos/1800/1000", "https://picsum.photos/1900/1000"], isLiked: true},
        {id: 8, content: "This is the eighth post.", author: john, images: ["https://picsum.photos/2000/1100", "https://picsum.photos/2100/1100"], isLiked: false},
        {id: 9, content: "This is the ninth post.", author: jane, images: ["https://picsum.photos/2200/1200", "https://picsum.photos/2300/1200"], isLiked: true},
        {id: 10, content: "This is the tenth post.", author: john, images: ["https://picsum.photos/2400/1300", "https://picsum.photos/2500/1300"], isLiked: false},
        // long text
        {id: 11, content: "This is the eleventh post. ".repeat(10), author: jane, images: ["https://picsum.photos/2600/1400", "https://picsum.photos/2700/1400"], isLiked: true},
    ];
}

export function getPostsByUser(username: string): Post[] {
    return getPosts().filter(post => post.author.username === username);
}

export function updatePostLike(post: Post, like: boolean) {
    post.isLiked = like;
}