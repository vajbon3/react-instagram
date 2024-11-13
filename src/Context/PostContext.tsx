import React, { createContext, useContext, useState, ReactNode } from 'react';
import {Post} from "../types";
import {getPosts} from "../Services/PostService";

interface PostContextProps {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostContext = createContext<PostContextProps | undefined>(undefined);

export const PostProvider = ({ children }: { children: ReactNode }) => {
    const [posts, setPosts] = useState<Post[]>(getPosts());

    return (
        <PostContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostContext.Provider>
    );
};

export const usePost = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error('usePost must be used within a PostProvider');
    }
    return context;
};