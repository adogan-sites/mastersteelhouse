import React, {Suspense} from 'react';
import {notFound} from 'next/navigation'
import Image from 'next/image'
import Link from "next/link";

import DATA from "../../../data/data.json";

import * as contentComponents from '../_contentComponents';

export const generateStaticParams = () => DATA.posts.map((post) => ({
    post: post.href.split('/').pop(),
}))

const Post = ({params}) => {
    const {post: postName} = params;
    const post = DATA.posts.find(({href}) => href.includes(postName));
    const {contentComponent, title} = post;
    const ContentComponent = contentComponents[contentComponent];

    if (!ContentComponent) {
        return notFound();
    }

    return (
        <div className="section-block">
            <div className="container">
                <div className="row">
                    <Suspense fallback={<span>Yükleniyor...</span>}>
                        <ContentComponent post={post}/>
                    </Suspense>
                    <div className="col-md-3 col-sm-3 col-xs-12">
                        <div className="blog-post-right">
                            <div className="heading-sm mt-0">
                                <h5>Diğer Yazılar</h5>
                            </div>
                            {
                                DATA
                                    .posts
                                    .filter(post_ => post_.title !== title)
                                    .map(otherPost => (
                                        <div className="latest-posts" key={otherPost.title}>
                                            <div className="row">
                                                <div className="col-md-5 col-sm-5 col-xs-4 latest-posts-img">
                                                    <Image
                                                        src="http://via.placeholder.com/92x92"
                                                        alt={otherPost.title}
                                                        width={92}
                                                        height={92}
                                                    />
                                                </div>

                                                <div className="col-md-7 col-sm-7 col-xs-8 latest-posts-text pl-0">
                                                    <Link href="#">{otherPost.title}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
