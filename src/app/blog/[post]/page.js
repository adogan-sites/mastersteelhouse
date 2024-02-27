import React, {Suspense} from 'react';
import {notFound} from 'next/navigation'

import DATA from "../../../data/data.json";

import * as contentComponents from '../_contentComponents';

import {getMetaByPage} from "@/utils";

export const generateStaticParams = () => DATA.posts.map((post) => ({
    post: post.href.split('/').pop(),
}))

export const generateMetadata = ({ params: {post: postName} }) => {
    return getMetaByPage({ href: postName });
}

const Post = ({params: {post: postName}}) => {
    const {contentComponent} = DATA.posts.find(({href}) => href.includes(postName));
    const ContentComponent = contentComponents[contentComponent];

    return !ContentComponent
        ? notFound()
        : (
            <Suspense fallback={<span>Yükleniyor...</span>}>
                <ContentComponent/>
            </Suspense>
        );
};

export default Post;
