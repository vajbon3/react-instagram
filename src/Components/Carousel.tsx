import React, {useState} from "react";
import {useSwipeable} from "react-swipeable";
import {Post} from "../types";
import {updatePostLike} from "../Services/PostService";

export default function Carousel({post}: { post: Post }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousImage = () => {
        setCurrentIndex(Math.max(0, currentIndex - 1));
    }
    const nextImage = () => {
        setCurrentIndex(Math.min(Math.max(0, post.images.length - 1), currentIndex + 1));
    }

    // like functionality
    const [isPostLiked, setIsPostLiked] = useState(post.isLiked);
    const handleLike = (like: boolean) => {
        setIsPostLiked(like);
        updatePostLike(post, like);
    }

    // Swipe functionality
    const swipeHandlers = useSwipeable({
        onSwipedLeft: nextImage,
        onSwipedRight: previousImage
    })

    return (
        <div className={"flex items-center justify-center w-full h-full flex-col p-4 rounded-lg"}>
            <div className={"relative flex gap-4 h-full w-full"}>
                {post.images.map((image, index) => (
                    currentIndex === index &&
                    <img key={image} src={image} className={"rounded-lg w-full object-cover h-80 select-none"} alt={"carousel"}/>
                ))}

                {/* overlay */}
                <div
                    {... swipeHandlers}
                    onDoubleClick={() => handleLike(true)}
                    className={`absolute w-full h-full flex items-center justify-center group cursor-pointer`}>
                    {/* like button */}
                    <svg onClickCapture={() => handleLike(!isPostLiked)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5"
                         className={`size-16 ${isPostLiked ? "fill-primary" : "fill-none"} stroke-primary invisible group-hover:visible group-active:scale-105 cursor-pointer`}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                    </svg>
                </div>

                {/* arrows */}
                {currentIndex > 0 && <div onClick={previousImage}
                                          className={"absolute left-0 h-full flex items-center px-4 hover:bg-gradient-to-l from-transparent to-blue-300 rounded-lg cursor-pointer"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
                    </svg>
                </div>}

                {currentIndex < post.images.length - 1 && <div onClick={nextImage}
                                                          className={"absolute right-0 h-full flex items-center px-4 hover:bg-gradient-to-r from-transparent to-blue-300 rounded-lg cursor-pointer"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                    </svg>
                </div>}

                {/* dots */}
                <div className={"absolute bottom-0 flex justify-center py-2 w-full gap-1"}>
                    {post.images.map((_image, index) => (
                        <div key={index}
                             className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-gray'}`}/>
                    ))}
                </div>
            </div>
        </div>
    );
}