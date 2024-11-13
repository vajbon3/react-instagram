import {User} from "../types";
import {getPostsByUser} from "./PostService";

export function getUsers(loadPosts: boolean = true): User[] {
    return [
        {
            id: 1,
            username: "JohnDoe",
            bio: "Sample bio",
            posts: loadPosts ? getPostsByUser("JohnDoe") : [],
            avatar: "https://i.pravatar.cc/150?img=12",
            followers: 115,
            following: 224,
        },
        {
            id: 2,
            username: "JaneDoe",
            bio: "Sample bio",
            posts: loadPosts ? getPostsByUser("JaneDoe") : [],
            avatar: "https://i.pravatar.cc/150?img=13",
            followers: 134,
            following: 212,
        },
    ]
}

export function searchUsers(query: string): User[] {
    return getUsers().filter(user => user.username.toLowerCase().includes(query));
}

export function getUserById(id: number): User {
    const maybeUser = getUsers().find(user => user.id === id);
    if (!maybeUser) throw new Error("User not found");
    return maybeUser;
}

export function getUserByUsername(username: string, loadPosts: boolean = true): User {
    const maybeUser = getUsers(loadPosts).find(user => user.username === username);
    if (!maybeUser) throw new Error("User not found");
    return maybeUser;
}
