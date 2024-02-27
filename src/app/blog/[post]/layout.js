import React from 'react';
import Image from "next/image";
import Link from "next/link";

import DATA from "@/data/data.json";

const BlogPostLayout = ({ children, params: {post: postName} }) => {
    const {
        title,
        image
    } = DATA.posts.find(({href}) => href.includes(postName));

    return (
        <div className="section-block">
            <div className="container">
                <div className="row">
                    { image && (
                        <div className="col-md-9 col-sm-9 col-xs-12">
                            <div className="blog-post">
                                <Image
                                    src={image}
                                    alt={title}
                                    width={848}
                                    height={449}
                                />
                                {children}
                            </div>
                        </div>
                    )}
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
                                                { otherPost.miniImage && (
                                                    <div className="col-md-5 col-sm-5 col-xs-4 latest-posts-img">
                                                        <Image
                                                            src={otherPost.miniImage}
                                                            alt={otherPost.title}
                                                            width={92}
                                                            height={92}
                                                        />
                                                    </div>
                                                )}
                                                <div className="col-md-7 col-sm-7 col-xs-8 latest-posts-text pl-0">
                                                    <Link scroll={false} href={otherPost.href}>{otherPost.title}</Link>
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

export default BlogPostLayout;