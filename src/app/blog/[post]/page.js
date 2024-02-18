import React from 'react';
import { notFound } from 'next/navigation'

import DATA from "../../../data/data.json";

export const generateStaticParams = () => {
    const posts = DATA.menu.find(m => m.href === "/blog").children;

    return posts.map((post) => ({
        post: post.href.slice(1),
    }))
}

const Post = ({ params }) => {
    const { post } = params;

    if (post === "asdasd") {
        return notFound();
    }

    return (
        <div>
            {post} BLOG POST SAYFASI
        </div>
    );
};

export default Post;