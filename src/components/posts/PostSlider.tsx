"use client";
import post from "@/types/post";
import { useEffect, useState } from "react";
import SwiperSlider from "../swiper/SwiperSlider";
import PostCard from "./PostCard";

export default function PostSlider() {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const posts = await (await fetch('https://picsum.photos/v2/list?page=3&limit=6', { cache: "default" })).json()
        setPosts(posts);
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <SwiperSlider breakpoints={{
            // For screens >= 768px
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            },
        }}>
            {posts.map((post: post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </SwiperSlider>
    );
}